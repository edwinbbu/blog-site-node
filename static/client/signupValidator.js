onsubmit="return validateForm()"
document.querySelector("#signupform").addEventListener('submit',(event)=>{
    var name=event.target.name.value;
    if(name=="abc"){
        name='';
        event.preventDefault();
    }
    console.log(event.target.email.value);
    //event.trigger('submit');
});