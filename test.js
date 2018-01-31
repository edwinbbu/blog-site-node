var map= {};
for(var i=0;i<5;i++)
{
    map[i]=i;
}
function test(){
    for(var i in map)
    {
        console.log(i);
    }
    return map;
};
function test2(){
    for(var i in map)
    {
        console.log(i);
    }
    
}

console.log(test());
test2();
