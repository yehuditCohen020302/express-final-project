

function userOrders()
{

    debugger
    let user = JSON.parse( sessionStorage.getItem("user"));
    let _id = user._id;
    fetch("/api/User/" + _id)
    .then(Response => {
        if (Response.ok && Response.status == 200)
            return Response.json()
        else
            throw new Error(Response.status)
    })
    .then(data => {
        debugger
        if (data) {
           document.write(JSON.stringify(data));
          // document.innerHTML(data);
        }
        else{
            alert(`you don't have orders`)
        }
    })
.catch (err=> console.log(err))
}
