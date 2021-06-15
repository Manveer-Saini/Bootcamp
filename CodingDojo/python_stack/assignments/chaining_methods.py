class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accountBalance = 0
    
    def makeDeposit(self, amount):
        self.accountBalance += amount
        return self

    def makeWithdrawal(self, amount):
        self.accountBalance -= amount
        return self
    
    def displayUserBalance(self):
        print(f"User: {self.name}, Balance: {self.accountBalance}")
        return self
    
    def transferMoney(self, otherUser, amount):
        self.accountBalance -= amount
        otherUser.accountBalance += amount
        return self

john = User("John Doe", "johnD@gmail.com")
jane = User("Jane Doe", "janeD@gmail.com")
richKid = User("Rich Richie", "richKid@gmail.com")

john.makeDeposit(400).makeDeposit(533).makeDeposit(900).makeWithdrawal(200).displayUserBalance()

jane.makeDeposit(4000).makeDeposit(6543).makeWithdrawal(1200).makeWithdrawal(1499).displayUserBalance()

richKid.makeDeposit(5000000000000).makeWithdrawal(40000).makeWithdrawal(23000).makeWithdrawal(90000).displayUserBalance()

richKid.transferMoney(john, 30000000).displayUserBalance().displayUserBalance()
