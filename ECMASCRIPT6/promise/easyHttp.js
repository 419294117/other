class EasyHttp {
    //get 
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => data)
                .catch(err => err)
        })

    }

    //post
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => data)
                .catch(err => err)
        })

    }

    //updata
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"PUT",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => data)
                .catch(err => err)
        })
    }

    //delete
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => "删除成功")
                .catch(err => err)
        })
    }
}