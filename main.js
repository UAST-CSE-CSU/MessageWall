var name ="DasAuto";

console.log(name);

let a=1;

console.log(a);

name="Simon";

console.log(name);

a=1+1;

console.log(a);

console.log("hello world".replace("hello","goodbye"))

console.log("hello world".toUpperCase())

const Pi=3.14;

console.log(Pi);

var x;

x="3"+"4";//两个字符串叠加

console.log(x);

var y;

y="3"+4+5;//在字符串后加数字，数字会转换为字符串格式
//等价于y="3"+"4"+"5"
console.log(y);

var z;

z=3+4+"5";//数字先相加，后叠加字符串

console.log(z);

//两个等号和三个等号
console.log(123=="123");//第一个123会自动转化为"123"
//==可类型自动转换
console.log(123==="123");//第一个123不转化，则不成立

var name="Simon";
var age="20";
if(name=="Simon"&&age=="21")
{
     console.log("Simon");
}
else
{
    console.log("Not Simon");
}

//while(ture)//死循环
//{
   // console.log("true");
//}

var age="20";
var m="19";
do
{
m++;
console.log(m);
}while(age==m)//先做一次do，m变为20，打印m，while成立，再做一次do，m=21，打印m，while不成立，终止。

//var定义的变量没有作用域，无论在哪定对整个程序都有效
//const,let都有作用域，和int类似（推荐）

var allowed=(age>=18)?"yes":"no";
console.log(allowed);

switch(name)
{
    case 'John'://注意格式''
        console.log("John");
        break;
    case 'Simon':
        console.log("Simon");
        break;
    default:
        console.log("stranger");
        break;
}

var obj=new Object();
var obj2={};
obj={
    name:"Simon",
    age:'20',
    email:"Simon@gmail.com",
    contact:{
        phone:"1234567",
        telegram:"@Simon"
    }

}
console.log(obj);
console.log(obj["contact"]["phone"]);

obj.age="21";//信息修改或添加
console.log(obj.age);

//数组
var n=new Array()
var b={}
n[0]="dog";
n[1]="cat";
n[5]="tiger";
console.log(n);

b=["dog","cat","tiger"];
b.push("sheep");//在b末尾加一个项
b.shift();//删除第一项
//b.unshift("lion");//在第一项前加一项
console.log(b);

for(let i=0;i<b.length;i++)
{
    console.log(b[i]);
}

for(let i in n)//不显示空项
{
    console.log(n[i]);
}

let t=1;
function add()
{
    t++;
}
add();//再执行一遍add，t=2
console.log(t);

var u=1;
function add(p)//也可添加任意多个参数
{
    u+=p;
}
add(4);
console.log(u);

function add()
{
    let sum=0;
    for(let i=0,j=arguments.length;i<j;i++)
    {
        sum+=arguments[i];
    }
    return sum;
}
let sum=add(1,2,3);
console.log(sum);


function makeAdder(c)
{
    return function(d)
    {
        return c+d;
    }
}
var x=makeAdder(5);
var sum1=x(6);
console.log(sum1);