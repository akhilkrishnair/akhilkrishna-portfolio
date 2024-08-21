import image from 'assets/images/ecommerce.jpg'


export const chatApplication = {
    title:"Chat Application",
    liveLink:null,
    description:"The chat application was developed from scratch, demonstrating proficiency in both frontend and backend technologies. The backend is built using Django and Django Channels, leveraging WebSocket for real-time communication. The frontend is developed using React, providing a seamless and interactive user interface.",
    description2: "User authentication is handled using JWT, ensuring secure login and session management. Real-time messaging and notifications keep users engaged and informed of new messages. File sharing allows users to exchange images and documents effortlessly.",
    description3: "The application supports pagination and infinite scroll for chat history, ensuring that users can easily navigate through past conversations without overwhelming the browser. The responsive design ensures that the application works smoothly on various devices, from desktops to smartphones.",
    technologiesUsed:"Python, Django, REST API, Web Socket, Django Channels, React, MySQL, JWT, JavaScript, CSS, HTML.",
    keyFeatures:[
        {
            title:"Real-Time Messaging",
            description:"Enables users to send and receive messages instantly without needing to refresh the page. This is achieved using WebSocket and Django Channels.",
        },
        {
            title:"User Authentication and Authorization",
            description:"Users can register, log in, and authenticate using JWT. Permissions ensure that users can only access their own data."
        },
        {
            title:"File Sharing",
            description:" Users can share images, documents, and other files within the chat. The application supports various file formats and ensures secure storage and retrieval."
        },
        {
            title:"Real-Time Notifications",
            description:"Users receive notifications for new messages, even when they are not actively viewing the chat window."
        },
        {
            title:"Pagination and Infinite Scroll",
            description:"Chat history is paginated and supports infinite scroll, allowing users to load more messages as they scroll up."
        },
        {
            title:"Responsive Design",
            description:"The chat application is fully responsive, providing an optimal user experience on both mobile and desktop devices."
        }
    ],
    imageUrl:image
}
export const eCommerce = {
    title:"E-Commerce Project",
    liveLink:"https://e-shop-personal-af87f.web.app/#/",
    description:"I developed a full-stack e-commerce platform using Django, React, and PostgreSQL. This project aimed to provide users with a seamless shopping experience by implementing various features including user authentication, product management, cart management, order processing, payment gateway, product review and wishlist functionality.",
    technologiesUsed:" Python, Django, REST API, React, PostgreSQL, JWT, JavaScript, HTML, CSS, Bootstrap, Nginx, AWS EC2, S3.",
    keyFeatures:[
        {
            title:"User Authentication",
            description:" Implemented secure user authentication and authorization functionality to ensure user data privacy and access control."
        },
        {
            title:"Product Management",
            description:"Created a comprehensive product management system allowing administrators to add, edit, and delete products, as well as manage product variants."
        },
        {
            title:"Shopping Cart",
            description:"Implemented a dynamic shopping cart feature enabling users to add products, update quantities, and remove items from their cart."
        },
        {
            title:"Product Search",
            description:"Integrated product search functionality to enable users to easily find products based on keywords or categories."
        },
        {
            title:"Product Details",
            description:"Developed a product details page with information about the product, available variants, and the option to select desired variants before adding to the cart."
        },
        {
            title:"Order Processing",
            description:"Implemented a streamlined order processing system allowing users to place orders securely, view order history, and track the status of their orders."
        },        
        {
            title:"Wishlist Management",
            description:"Added a wishlist feature enabling users to save products for future purchase consideration."
        },
        {
            title:"Review System",
            description:"Implemented a review system allowing registered users to leave reviews and ratings for products they have purchased, enhancing product transparency and aiding other users in their purchase decisions."
        },
    ],
    imageUrl:image
}




