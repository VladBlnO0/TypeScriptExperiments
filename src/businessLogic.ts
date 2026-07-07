#!/usr/bin/env node

function validate(balance: number, amount: number): boolean {
  if (amount <= 0.0) {
    return false;
  }
  return amount <= balance;
}

function deposit(balance: number, percentage: number, years: number): number {
  if (balance <= 0.0 || percentage <= 0.0 || years <= 0) {
    return balance;
  }
  let interest: number;
  for (let i = 0; i < years; i++) {
    interest = (balance * percentage) / 100;
    balance += interest;
  }
  return Math.round(balance * 100) / 100;
}

function transaction(
  senderCard: string,
  receiverBalance: number,
  amount: number,
) {
  console.log("Received: " + amount);
  console.log("From: " + senderCard);
  console.log(`Balance now: ${receiverBalance + amount}`);
}

function getCardNumber(): number {
  const num = Math.floor(Math.random() * (999_999_999 - 100_000_000 + 1));
  return String(num).length + 1;
}

function validateChangeDailyLimit(newLimit: number, currentLimit: number) {
  if (newLimit <= 0) {
    console.log("Limit must not be greater than 0");
    return false;
  }
  if (currentLimit === newLimit) {
    console.log("Limit must not be same as current");
    return false;
  }
  console.log("Limit has changed");
  return true;
}

const balance = 1000.0;
const amount = 250.0;
const years = 3;
const newLimit = 40;
const currentLimit = 20;

console.log(
  "Transaction valid? " + (validate(balance, amount) ? " Yes" : " No"),
);

console.log("New card number: " + getCardNumber());

validateChangeDailyLimit(newLimit, currentLimit);

const ok = validate(balance, amount);
console.log("Transaction valid? " + (ok ? "Yes" : "No"));

const newBalance = deposit(balance, 2.5, years);
console.log("Balance after " + years + " years = " + newBalance);

const str = "4242 4242 4242 4242";
transaction(str, balance, 10.5);
