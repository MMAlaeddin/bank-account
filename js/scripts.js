//back end
function Bank() {
  this.accounts = [];
  // console.log(accounts);
}

Bank.prototype.addAccount = function(account) {
  this.accounts.push(account);
}

function Account(name, open, deposit, withdrawal) {
  this.name = name,
  this.open = open,
  this.deposit = deposit,
  this.withdrawal = withdrawal

}





//front end
var bank = new Bank();


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userName = $("input.Name").val();
    var userOpen = parseInt($("input.open").val());
    var userDeposit = parseInt($("input.deposit").val());
    var userWithdraw = parseInt($("input.withdraw").val());
    var adding = userOpen + userDeposit;
    var newAccount = new Account (userName, userOpen, userDeposit, userWithdraw);
    bank.addAccount(newAccount);

console.log(bank);
    $("#output").show();
    $(".newName").html(userName);
    $(".openBalance").html(userOpen);
    $(".newBalance").html(adding);
    
    
  });
  
});