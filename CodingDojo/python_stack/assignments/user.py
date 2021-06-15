class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accountBalance = 0
    
    def makeDeposit(self, amount):
        self.accountBalance += amount

    def makeWithdrawal(self, amount):
        self.accountBalance -= amount
    
    def displayUserBalance(self):
        print(f"User: {self.name}, Balance: {self.accountBalance}")
    
    def transferMoney(self, otherUser, amount):
        self.accountBalance -= amount
        otherUser.accountBalance += amount

john = User("John Doe", "johnD@gmail.com")
jane = User("Jane Doe", "janeD@gmail.com")
richKid = User("Rich Richie", "richKid@gmail.com")

john.makeDeposit(400)
john.makeDeposit(533)
john.makeDeposit(900)
john.makeWithdrawal(200)
john.displayUserBalance()

jane.makeDeposit(4000)
jane.makeDeposit(6543)
jane.makeWithdrawal(1200)
jane.makeWithdrawal(1499)
jane.displayUserBalance()

richKid.makeDeposit(5000000000000)
richKid.makeWithdrawal(40000)
richKid.makeWithdrawal(23000)
richKid.makeWithdrawal(90000)
richKid.displayUserBalance()

richKid.transferMoney(john, 30000000)
richKid.displayUserBalance()
john.displayUserBalance()
