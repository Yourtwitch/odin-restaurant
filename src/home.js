import steakIcon from './images/steakicon.png';
import { makeContainer, createElement, appendElements, getContent, clearContent, createImage } from './base.js';

const homePage = () => {
    const content = getContent("content");
    clearContent("content");
    const heading = createElement("div","heading");
    const iconBefore = createImage("icon", steakIcon, "Steak Icon");
    const iconAfter = createImage("icon", steakIcon, "Steak Icon");
    const text = createElement("span",'',"Welcome to Joe's Steakhouse!");
    const reviewContainer = makeContainer("reviewContainer","reviewContainer");
    const reviewText = createElement("span","","At Big Joe's Steakhouse, the steaks are simply unmatched! The cozy, rustic atmosphere and top-notch service make you feel like you're at a classic cookout, enjoying a perfectly grilled steak under the open sky. It's the kind of place that keeps calling you back for more, bite after juicy bite.");
    const reviewerName = createElement("span","reviewerName","Not Yourtwitch");
    const hoursContainer = makeContainer("hoursContainer","hoursContainer")
    const hoursHeading = createElement("div","hoursHeading","Hours")
    const hours = ["Monday: 6am - 6pm","Tuesday: 6am-6pm","Wednesday: 6am - 6pm","Friday: 6am-10pm","Saturday: 8am - 10pm","Sunday: 8am - 8pm"];
    const hoursDays = makeContainer("hoursDays","hoursDays")
    const locationContainer = createElement("div","locationContainer");
    const locationText = createElement("span","","21 Forest Drive, Forestville, Maine");
    const locationHeading = createElement("span","locationHeading","Location");
    hours.forEach(day => {
        const days = createElement("p","",day);
        hoursDays.appendChild(days);        
    });
    appendElements(heading,iconBefore,text,iconAfter)
    appendElements(reviewContainer, reviewText,reviewerName);
    appendElements(hoursContainer,hoursHeading,hoursDays);
    appendElements(locationContainer,locationHeading,locationText);
    appendElements(content, heading, reviewContainer,hoursContainer,locationContainer);
}

export default homePage;