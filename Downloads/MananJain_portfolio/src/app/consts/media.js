import proxy from "../proxies/media"

const media = {

    stackOverflow: {
        id: "19758208",
        name: "elias",
    },
    github: "mananjain0220",
    linkedin: {
        id: "in/mananjain0220",
        tag: "Manan Jain",
    },
        // discord: {
    //     id: "914240860101681163",
    //     tag: "elias.dev.",
    // },
    email: "mananjain0220@gmail.com",
    medium: "mananjain0"

}

export default new Proxy(media, proxy);

