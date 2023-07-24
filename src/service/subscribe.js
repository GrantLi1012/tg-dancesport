import jsonp from "jsonp";

const subscribe = async (email) => {
    const url = 'https://wwwtgdancesport.us17.list-manage.com/subscribe/post?u=9426f692adf3fa5f57adaffbf&amp;id=7a46101846&amp;f_id=000767e0f0';
    jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {
        const { msg, result } = data;
        if (result === "error") {
            alert("Error: " + msg);
        }
        else alert(msg);
        alert("Successfully subscribed to TG Dancesport!")
    });
};

export default subscribe;