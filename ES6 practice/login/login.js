let push1=function() {
    var name=document.getElementById('name').value
    var pass=document.getElementById('password').value

    //template literals
    console.log(`id=${name} \npassword=${pass}`);
    console.log("id=" + name + "\n" + "password=" + pass)

    //check input name and password box are empty//
    if (name == "" || pass == "" ){
        text = "※ユーザーIDまたはパスワードが違います。";
        document.getElementById("message").innerHTML=text;
    } 
}