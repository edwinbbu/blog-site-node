onsubmit="return validateForm()"
document.querySelector("#signupform").addEventListener('submit',(event)=>{
    let name=event.target.name.value;
    console.log(typeof(name)+":"+name);
    if(name==''){
        let html='<input type="text" class="form-control" name="name" placeholder="Name"\>\
                  <p style="color:#b11616;font-size: 14px;">*Provide a name<p>';
        $("#name").html(html);
        event.preventDefault();
    }
    console.log(event.target.email.value);
    //event.trigger('submit');
});