---
id: getting-started
title: Getting Started
---

Welcome to the Simoleon Developer Portal! Here's how to start integrating Simoleon Checkout into your app or platform.

### Step 1: Install the SDK
```bash
npm install ethers
```

### Step 2: Import and Use
```js
import { checkoutWithSimoleon } from '@simoleon/sdk';

checkoutWithSimoleon({
  recipient: '0xMerchantWallet...',
  amountFiat: 10.00,
  fiatCurrency: 'USD',
  onComplete: () => alert('Payment complete'),
  onError: (err) => console.error(err)
});
```

### Step 3: Confirm Transaction with Face ID (Coming Soon)
- Users will be able to confirm payments using Face ID via supported wallets
