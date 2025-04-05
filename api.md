---
id: api
title: Simoleon API
---

### POST /checkout/initiate
Starts a checkout session.

```json
{
  "amountFiat": 12.99,
  "fiatCurrency": "USD",
  "customerWallet": "0xabc...",
  "merchantWallet": "0xmerchant...",
  "metadata": {
    "orderId": "ORDER_001"
  }
}
```

### POST /checkout/confirm
Confirms a checkout transaction.

```json
{
  "sessionId": "sess_123456",
  "signature": "signed_payload_here"
}
```

### Security Notes
- All endpoints are protected by HTTPS
- Signature verification required
- Session expires in 5 minutes

---
© Simoleon Labs
