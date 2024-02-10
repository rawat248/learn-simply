const courseModel = [
  {
    id: 1, // Unique identifier for the course
    name: "Introduction to React Native",
    instructor: "John Doe", // Name of the course instructor
    description:
      "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: "Open", // Can be 'Open', 'Closed', or 'In Progress'
    thumbnail:
      "https://img.freepik.com/premium-photo/full-shot-queer-students-outdoors_23-2150405216.jpg?t=st=1707464121~exp=1707464721~hmac=226bf4a8110440ef2cabe6d6f56be6e66dabc5e13e0240570056fcca511a5196.webp", // Link to the course thumbnail image
    duration: "8 weeks", // Duration of the course
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    prerequisites: ["Basic JavaScript knowledge", "Familiarity with React"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React Native",
        content:
          "Overview of React Native, setting up your development environment.",
      },
      {
        week: 2,
        topic: "Building Your First App",
        content: "Creating a simple mobile app using React Native components.",
      },
      {
        week: 3,
        topic: "Styling in React Native",
        content:
          "Learn how to style your application using StyleSheet and inline styling.",
      },
      {
        week: 4,
        topic: "State Management",
        content:
          "Introduction to state management in React Native. Understanding state and props.",
      },
      {
        week: 5,
        topic: "Navigation",
        content:
          "Implementing navigation between different screens in your app.",
      },
      {
        week: 6,
        topic: "Connecting to APIs",
        content:
          "Fetching data from external APIs and displaying it in your app.",
      },
      {
        week: 7,
        topic: "Publishing Your App",
        content:
          "Overview of the process to publish your app on the Apple App Store and Google Play Store.",
      },
      {
        week: 8,
        topic: "Project Work",
        content:
          "Work on your final project, implementing what you have learned throughout the course.",
      },
      // Additional weeks and topics...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Dana Lee",
        email: "dana@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "Python Development from Scratch",
    instructor: "Jane Smith",
    description:
      "Dive into Python development with this comprehensive course designed for beginners.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-photo/full-shot-couple-having-bookstore-date_23-2150334593.jpg?t=st=1707464121~exp=1707464721~hmac=f1d22052eebeb9090a69d5957e47273f143682344c67f452c17b3c4977d6058f.webp", // Example placeholder; replace with actual URL
    duration: "10 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    prerequisites: ["Basic programming concepts"],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started with Python",
        content:
          "Introduction to Python, its history, and setting up the development environment.",
      },
      {
        week: 2,
        topic: "Variables and Data Types",
        content:
          "Understanding Python variables, data types, and basic input/output.",
      },
      {
        week: 3,
        topic: "Control Structures",
        content:
          "Exploring if statements, loops, and control structures in Python.",
      },
      {
        week: 4,
        topic: "Functions and Modules",
        content:
          "Defining and calling functions, understanding scope, and using modules.",
      },
      {
        week: 5,
        topic: "Data Structures",
        content:
          "Working with lists, dictionaries, sets, and tuples for data organization.",
      },
      {
        week: 6,
        topic: "Object-Oriented Programming",
        content:
          "Introduction to classes, objects, inheritance, and polymorphism.",
      },
      {
        week: 7,
        topic: "File Handling",
        content: "Reading from and writing to files, understanding file paths.",
      },
      {
        week: 8,
        topic: "Error Handling and Debugging",
        content:
          "Implementing try-except blocks, understanding exceptions, and basic debugging techniques.",
      },
      {
        week: 9,
        topic: "Introduction to Web Development with Flask",
        content: "Creating simple web applications using Flask.",
      },
      {
        week: 10,
        topic: "Project Work",
        content:
          "Applying what you have learned to develop a complete Python project.",
      },
      // Additional weeks and topics as needed...
    ],
    students: [
      {
        id: 101,
        name: "Alice Johnson",
        email: "alice@example.com",
      },
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Dana Lee",
        email: "dana@example.com",
      },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "JavaScript for Beginners",
    instructor: "Elena Rodriguez",
    description:
      "An introduction to JavaScript, aimed at individuals new to programming or looking to expand their web development skills.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/premium-photo/student-learning-library-young-man-preparing-test-laptop-man-listening-online-course_1048944-28235650.jpg?t=st=1707464121~exp=1707464721~hmac=16cda77ec648dd1e8532bc00a774cf72ad1f657278cc7e854a9b88607f0c7bd1.webp", // Placeholder URL
    duration: "6 weeks",
    schedule: "Mondays and Fridays, 5:00 PM - 7:00 PM",
    location: "Online",
    prerequisites: ["Basic computer skills"],
    syllabus: [
      {
        week: 1,
        topic: "Getting Started with Python",
        content:
          "Introduction to Python, its history, and setting up the development environment.",
      },
      {
        week: 2,
        topic: "Variables and Data Types",
        content:
          "Understanding Python variables, data types, and basic input/output.",
      },
      {
        week: 3,
        topic: "Control Structures",
        content:
          "Exploring if statements, loops, and control structures in Python.",
      },
      {
        week: 4,
        topic: "Functions and Modules",
        content:
          "Defining and calling functions, understanding scope, and using modules.",
      },
      {
        week: 5,
        topic: "Data Structures",
        content:
          "Working with lists, dictionaries, sets, and tuples for data organization.",
      },
      {
        week: 6,
        topic: "Object-Oriented Programming",
        content:
          "Introduction to classes, objects, inheritance, and polymorphism.",
      },
      {
        week: 7,
        topic: "File Handling",
        content: "Reading from and writing to files, understanding file paths.",
      },
    ],
    students: [
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Dana Lee",
        email: "dana@example.com",
      },
    ],
  },
  {
    id: 4,
    name: "Data Analysis with Python",
    instructor: "Mohamed Al Fayed",
    description:
      "Learn how to manipulate, analyze, and visualize data using Python libraries such as pandas and matplotlib.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/premium-photo/book-with-globe-it_850197-1445.jpg?size=626&ext=jpg&ga=GA1.1.2126976032.1691128280&semt=sph", // Placeholder URL
    duration: "8 weeks",
    schedule: "Wednesdays and Fridays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Python Development from Scratch or equivalent knowledge"],
    syllabus: [
      {
        week: 4,
        topic: "Functions and Modules",
        content:
          "Defining and calling functions, understanding scope, and using modules.",
      },
      {
        week: 5,
        topic: "Data Structures",
        content:
          "Working with lists, dictionaries, sets, and tuples for data organization.",
      },
      {
        week: 6,
        topic: "Object-Oriented Programming",
        content:
          "Introduction to classes, objects, inheritance, and polymorphism.",
      },
      {
        week: 7,
        topic: "File Handling",
        content: "Reading from and writing to files, understanding file paths.",
      },
    ],
    students: [
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Dana Lee",
        email: "dana@example.com",
      },
    ],
  },
  {
    id: 5,
    name: "Full-Stack Web Development",
    instructor: "Carlos Santan",
    description:
      "Dive into both front-end and back-end web development, from HTML/CSS to server-side programming with Node.js.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-photo/international-day-education-futuristic-style_23-2150998665.jpg?size=626&ext=jpg&ga=GA1.1.2126976032.1691128280&semt=sph", // Placeholder URL
    duration: "8 weeks",
    schedule: "Wednesdays and Fridays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Python Development from Scratch or equivalent knowledge"],
    syllabus: [
      {
        week: 4,
        topic: "Functions and Modules",
        content:
          "Defining and calling functions, understanding scope, and using modules.",
      },
      {
        week: 5,
        topic: "Data Structures",
        content:
          "Working with lists, dictionaries, sets, and tuples for data organization.",
      },
      {
        week: 6,
        topic: "Object-Oriented Programming",
        content:
          "Introduction to classes, objects, inheritance, and polymorphism.",
      },
      {
        week: 7,
        topic: "File Handling",
        content: "Reading from and writing to files, understanding file paths.",
      },
    ],
    students: [
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Dana Lee",
        email: "dana@example.com",
      },
    ],
  },
  {
    id: 6,
    name: "Introduction to Cloud Computing",
    instructor: "Aisha Khan",
    description:
      "Understand the basics of cloud computing and get hands-on experience with AWS, Azure, or Google Cloud.",
    enrollmentStatus: "Open",
    thumbnail:
      "https://img.freepik.com/free-photo/view-young-child-student-with-vr-glasses_23-2151110079.jpg?size=626&ext=jpg&ga=GA1.1.2126976032.1691128280&semt=sph", // Placeholder URL
    duration: "8 weeks",
    schedule: "Wednesdays and Fridays, 6:30 PM - 8:30 PM",
    location: "Online",
    prerequisites: ["Python Development from Scratch or equivalent knowledge"],
    syllabus: [
      {
        week: 4,
        topic: "Functions and Modules",
        content:
          "Defining and calling functions, understanding scope, and using modules.",
      },
      {
        week: 5,
        topic: "Data Structures",
        content:
          "Working with lists, dictionaries, sets, and tuples for data organization.",
      },
      {
        week: 6,
        topic: "Object-Oriented Programming",
        content:
          "Introduction to classes, objects, inheritance, and polymorphism.",
      },
      {
        week: 7,
        topic: "File Handling",
        content: "Reading from and writing to files, understanding file paths.",
      },
    ],
    students: [
      {
        id: 102,
        name: "Bob Smith",
        email: "bob@example.com",
      },
      {
        id: 103,
        name: "Charlie Davis",
        email: "charlie@example.com",
      },
      {
        id: 104,
        name: "Dana Lee",
        email: "dana@example.com",
      },
    ],
  },
];

export default courseModel;
