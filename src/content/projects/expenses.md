---
# draft(false), title, description, url?, repository, logo?, video?, image: src, alt?, stack,
title: Expenses
description: Expense app for quickly tracking living costs.
url: https://expenses.conalli.info
repositories:
    - name: app
      url: https://github.com/conalli/expenses
stack: [TypeScript, Next.js, Tailwind CSS, Python, Django Rest Framework, Pytest, Celery, Redis, PostgreSQL, NGINX, Docker, Tesseract OCR, SendGrid]
---

## Expenses is currently under development

Expenses is an expense management app written in Python, using Django, Django Rest Framework, Pytest and Celery on the backend and TypeScript, Next.js and Tailwind CSS on the frontend.

Expenses provides a dashboard for users to track their expenses individually or in a group and produces monthly expense reports sent by email. Alongside forms for inputting expense data, it also uses Tesseract OCR to allow users to extract expense amounts from receipts.

## Future Features

- [x] Implement receipt uploading to s3.

- [ ] Update backend auth.

- [ ] Add styling to emails.

- [ ] More advanced receipt text recognition.
