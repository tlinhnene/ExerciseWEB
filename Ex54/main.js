function get_val(id)
{
    var x = parseFloat(document.getElementById(id).value);
    return isNaN(x) ? 0 : x;
}
function set_result(v)
{
    td_result.innerText = v;
}
function deg2rad(d)
{ 
    return d * Math.PI / 180; 
}
function ex54_max()
{
    var a=get_val("a"), b=get_val("b"), c=get_val("c");
    set_result(Math.max(a,b,c));
}
function ex54_min()
{
    var a=get_val("a"), b=get_val("b"), c=get_val("c");
    set_result(Math.min(a,b,c));
}
function ex54_sin()
{
    var a=get_val("a");
    set_result(Math.sin(deg2rad(a)));
}
function ex54_cos()
{
    var a=get_val("a");
    set_result(Math.cos(deg2rad(a)));
}
function ex54_pow()
{
    var a=get_val("a"), b=get_val("b");
    set_result(a ** b);
}
