// source: https://www.tgdancesport.com/classes.html
import {miniClass, youthClass, techniqueClass, performanceClass, conditioningClass, introClass, intro2, tg10} from '../asset';

const classesStrings = {
    classes: [
        {
            title: "Mini Dancer Program (Age 4-6)",
            texts: [
                "• Learn basic movements to improve agility, balance, and coordination.",
                "• Develop motor skills to improve in other sports.",
                "• Introduction to ballroom music, rhythm and musicality.",
                "• Enhance social and communication skills.",
                "• Build confidence and self esteem.",
                "• Learn discipline while having fun.",
            ],
            src: miniClass,
        },
        {
            title: "Young (7-10) & Junior (11+) Dance Program",
            texts: [
                "• Introduction to basic ballroom dance steps and figures.",
                "• Improve agility, balance, core strength, and coordination.",
                "• Develop motor skills to improve in other sports.",
                "• Train ear for rhythm and musicality.",
                "• Enhance social and communication skills.",
                "• Build confidence and self esteem.",
                "• Learn discipline while having fun.",
            ],
            src: youthClass,
        },
        {
            title: "Adult Ballroom Intro Class",
            texts: [
                "• Learn ballroom dance steps and figures.",
                "• Learn to dance choreography at social events and parties.",
                "• Improve agility, balance, core strength, and coordination.",
                "• Have fun and learn a new skill in a relaxed environment.",
            ],
            src: intro2,
        },
        {
            title: "Adult Ballroom 101 Class",
            texts: [
                "• Pre-requisite: Adult Ballroom Intro or prior dance experience",
                "• Learn more figures and build on basics.",
                "• Apply more technique to improve dancing.",
                "• Open to singles and couples",
            ],
            src: introClass,
        },
        {
            title: "Ballroom Technique Class",
            texts: [
                "• Clear and easy to understand instructions.",
                "• Stay updated with the latest development in technique.",
                "• Demonstrations by professional male and female instructors.",
                "• Individual attention."
            ],
            src: techniqueClass,
        },
        {
            title: "Performance Training Class",
            texts: [
                "• Drills and exercises designed specifically for dancers.",
                "• Proven methods used by top dancers in the world, including many World Champions.",
                "• Strengthening of the body and mind so you can dance at your maximum capability.",
            ],
            src: performanceClass,
        },
        {
            title: "Conditioning Group Class",
            texts: [
                "• Developed by dancesport trainers and athletes.",
                "• Physical conditioning to improve agility, stamina, core strength, power, and flexibility.",
                "• Strengthening of the body and targeted stretching for injury prevention.",
            ],
            src: conditioningClass,
        },
        {
            title: "Private Lessons",
            texts: [
                "• Professional instructors with 10+ years of teaching experience and 20+ years of competition experience.",
                "• Clear and easy to understand explanations.",
                "• Teaching with structured methodology.",
                "• For anyone who is interested in individual attention to accelerate the learning process.",
            ],
            src: tg10,
        },
    ],
    faq: [
        {
            question: "Do I need a partner?",
            answer: "No, you do not need a partner. To accelerate learning, partner switching will be encouraged and you will have the opportunity to dance with other students and the instructor."
        },
        {
            question: "Where are the classes held?",
            answer: "The Adult Social classes are held at Scottish Cultural Centre and the Kids Classes are in Richmond."
        },
    ]
};

export default classesStrings;