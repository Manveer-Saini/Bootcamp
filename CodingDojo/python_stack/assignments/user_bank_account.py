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
        self.balance *= self.interest_rate
        return self


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.wellsFargo = BankAccount()
        self.chase = BankAccount()
        self.comercia = BankAccount()
    
    def makeDeposit(self, accountType, amount):
        if(accountType == "Wells Fargo"):
            self.wellsFargo.deposit(amount)
        if(accountType == "Chase"):
            self.chase.deposit(amount)
        if(accountType == "Comercia"):
            self.comercia.deposit(amount)    
        return self

    def makeWithdrawal(self, accountType, amount):
        if(accountType == "Wells Fargo"):
            self.wellsFargo.withdraw(amount)
        if(accountType == "Chase"):
            self.chase.withdraw(amount)
        if(accountType == "Comercia"):
            self.comercia.withdraw(amount)    
        return self
    
    def displayUserBalance(self, accountType):
        if(accountType == "Wells Fargo"):
            self.wellsFargo.display_account_info()
        if(accountType == "Chase"):
            self.chase.display_account_info()
        if(accountType == "Comercia"):
            self.comercia.display_account_info()    
        return self
    
    # def transferMoney(self, otherUser, amount):
    #     self.account.balance -= amount
    #     otherUser.account.balance += amount
    #     return self
    
matthew = User("Matthew Le", "matthew@gmail.com")
nathan = User("Nathan", "nathan@gmail.com")

nathan.makeDeposit("Chase", 5000000).displayUserBalance("Chase").makeDeposit("Wells Fargo", 2000).displayUserBalance("Wells Fargo")
