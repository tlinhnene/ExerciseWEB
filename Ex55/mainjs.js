function solve_quadratic() 
{
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);
    var result = document.getElementById("td_result");

    if (isNaN(a) || isNaN(b) || isNaN(c)) 
    {
        result.innerHTML = "<span style='color:red'>Please enter all values!</span>";
        return;
    }
    if (a === 0)
    {
        if (b === 0)
            result.innerHTML = "<span style='color:red'>No solution</span>";
        else
            result.innerHTML = "x = " + (-c / b);
        return;
    }
    var delta = b*b - 4*a*c;
    if (delta < 0) 
    {
        result.innerHTML = "<span style='color:red'>No real roots</span>";
    } 
    else if (delta === 0) 
    {
        var x = -b / (2*a);
        result.innerHTML = "x₁ = x₂ = " + x.toFixed(2);
    } 
    else 
    {
        var x1 = (-b + Math.sqrt(delta)) / (2*a);
        var x2 = (-b - Math.sqrt(delta)) / (2*a);
        result.innerHTML = "x₁ = " + x1.toFixed(2) + " ; x₂ = " + x2.toFixed(2);
    }
}
function clear_quadratic() 
{
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("c").value = "";
    document.getElementById("td_result").innerText = "";
}
