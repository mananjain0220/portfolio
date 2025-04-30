/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
    {
        id: "dogatlas",
        links: {
            github: "mananjain0220/Dog-Atlas",
        },
        techs: ["swift", "restapi"],
        hasImage: true,
        isWideImage: false
    },
    {
        id: "weatherapp",
        links: {
            github: "mananjain0220/WeatherApp-RESTAPI",
        },
        techs: ["swift", "restapi", "json"],
        hasImage: true,
        isWideImage: false
    },
    {
        id: "coredataexercise",
        links: {
          github: "mananjain0220/LittleLemon-Resturant-CoreData-Exercise"
        },
        techs: ["swift", "coredata"],
        hasImage: true,
        isWideImage: true,
      },
    {
        id: "lengthunitconverter",
        techs: ["swift", "ios", "swiftui"],
        links: {
            github: "mananjain0220/Length-Unit-Converters",
        },
        hasImage: true,
        isWideImage: true
    },
    {
        id: "easybrowser",
        techs: ["URLSession", "ios", "swiftui", "webkit"],
        links: {
            github: "mananjain0220/Easy-Browser",
        },
        hasImage: true,
        isWideImage: false
    },
    {
        id: "wesplit",
        links: {
            github: "mananjain0220/WeSplit-App",
        },
        techs: ["swift", "xcode"],
        hasImage: true,
        isWideImage: true
    },
    {
        id: "flaggame",
        techs: ["swift", "ios", "uikit"],
        links: {
            github: "mananjain0220/FlagGame",
        },
        hasImage: true,
        isWideImage: true
    },
    {
        id: "cnn",
        links: {
          github: "mananjain0220/Facial-Expression-Recognition-Convolutional-Neural-Network"
        },
        techs: ["python", "cnn", "flask", "ml"],
        isSmall: true,
        hasImage: false
      }, 
      {
        id: "damagedetection",
        links: {
          github: "mananjain0220/Damage-Detection-using-Supervised-ML-and-Image-Classification-of-Damaged-Shipments"
        },
        techs: ["python", "ml", "imageclassification"],
        isSmall: true,
        hasImage: false
      }, 
      {
        id: "iris",
        links: {
          github: "mananjain0220/Iris-Dataset-Classification"
        },
        techs: ["python", "sklearn", "svm", "jupyter"],
        isSmall: true,
        hasImage: false
      },
      {
        id: "weatherappflask",
        links: {
          github: "mananjain0220/Weather-app-using-python-and-flask"
        },
        techs: ["python", "flask", "api"],
        isSmall: true,
        hasImage: false
      }
];

export default projects;
