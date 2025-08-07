function checkPassword(){
    const password =document.getElementById('pw').value;
    if(password='beautifulcat777'){
        window.location.href='main.html';
    }
    else{
        alert=('パスワードが違います');
    }
}