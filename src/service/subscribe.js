import jsonp from "jsonp";

function isValidEmail(email) {
    // Regular expression pattern for a basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return emailPattern.test(email);
}

const subscribe = async (email) => {
    if (isValidEmail(email)){
        const url = 'https://wwwtgdancesport.us17.list-manage.com/subscribe/post?u=9426f692adf3fa5f57adaffbf&amp;id=7a46101846&amp;f_id=000767e0f0';
        jsonp(`${url}&EMAIL=${email}`, { param: 'c' }, (_, data) => {});
        alert("Successfully subscribed to TG Dancesport!")
        return true;
    } else {
        alert("Please enter a valid email!")
        return false;
    }
};

export default subscribe;