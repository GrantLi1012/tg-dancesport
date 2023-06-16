import jsonp from "jsonp";

const subscribe = (email) => {
    const url = 'https://gmail.us21.list-manage.com/subscribe/post-json?u=0da4a5a2c1b7f7424e8b2397c&amp;id=5453542466&amp;f_id=00a05ae1f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
        const { msg, result } = data;
        if (result === "error") {
            alert("Error: " + msg);
        }
        else alert(msg);
    });
};

export default subscribe;