class BankAccount:
    def __init__(self, int_rate=.05, balance=0):
        self.interest_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if(amount > self.balance):
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= 5
        else:
            self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: ${self.balance}")
        return self

    def yield_interest(self):
        self.balance *= (self.interest_rate + 1)
        return self

chase = BankAccount(.2, 30000000)
wellsFargo = BankAccount(.04, 20000000)

chase.deposit(12000).deposit(3200).deposit(12222).withdraw(3000).yield_interest().display_account_info()
wellsFargo.deposit(3000).deposit(12333333333333333333).withdraw(3000000).withdraw(333).withdraw(20000).withdraw(4444444444).yield_interest().display_account_info()