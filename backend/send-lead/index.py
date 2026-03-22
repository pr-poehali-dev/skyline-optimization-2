import json
import os
import urllib.request

CHAT_ID = ""


def handler(event: dict, context) -> dict:
    """Отправляет заявку с сайта в Telegram-бот СмаСервис"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    description = body.get('description', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'Имя и телефон обязательны'}
        }

    token = os.environ['TELEGRAM_BOT_TOKEN']

    message = (
        f"📋 Новая заявка с сайта!\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
    )
    if description:
        message += f"📝 Описание: {description}\n"

    # Получаем chat_id владельца через getUpdates или используем числовой ID
    # Сначала пробуем отправить по номеру телефона через username
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')

    if not chat_id:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': {'error': 'TELEGRAM_CHAT_ID не задан'}
        }

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = json.dumps({
        'chat_id': chat_id,
        'text': message,
        'parse_mode': 'HTML'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})
    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': {'ok': True}
    }