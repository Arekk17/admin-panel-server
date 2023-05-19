// TODO add strictness around given/required types and properties
const Schema = `
  enum WORDGROUP {
    VERB
    NOUN
    ADJECTIVE
    ADVERB
    PRONOUN
    ARTICLE
    PREPOSITION
    CONJUCTION
    NUMERAL
  }

  enum Role {
    USER
    ADMIN
    MODERATOR
    TEACHER
  }

  type User {
    id: String
    email: String
    password: String
    name: String
    surname: String
    phoneNumber: Int
    phonePrefix: Int
    joined: String
    role: Role
  }

  type Landing {
    id: Int
    title: String
    name: String
    slug: String
    content: String
  }

  type AuthPayload {
    token: String
    user: User
  }

  type Order {
    id: String
    user: User
    course: Course
    bundle: Bundle
    orderedAt: String
  }

  type Progress {
    id: Int
    user: User
    course: Course
    lessons: Int
    exercises: Int
    words: Int
  }

  type Course {
    id: Int
    name: String
    level: Level
    bundle: Bundle
    language: Language
    lessons: [Lesson]
  }

  type Level {
    id: Int
    name: String
    imageUrl: String
    description: String
    courses: [Course]
  }

  type Bundle {
    id: Int
    name: String
    content: String
    price: Float
    courses: [Course]
  }

  type Language {
    id: Int
    name: String
    logo: String
    lessons: [Lesson]
    sentences: [Sentence]
    exercises: [Exercise]
  }

  type Lesson {
    id: Int
    name: String
    course: Course
    words: [Word]
    sentences: [Sentence]
    exercises: [Exercise]
    language: Language
  }

  type Word {
    id: Int
    original: String
    foreign: String
    pronunciation: String
    audioUrl: String
    imageUrl: String
    wordGroup: WORDGROUP
    lesson: Lesson
    language: Language
  }

  type Sentence {
    id: Int
    original: String
    foreign: String
    pronunciation: String
    audioUrl: String
    lesson: Lesson
    language: Language
  }

  type Exercise {
    id: Int
    name: String
    lesson: Lesson
  }

  type Query {
    users: [User]
    user(id: String): User
    landings: [Landing]
    landing(id: Int): Landing
    orders: [Order]
    order(id: String): Order
    progresses: [Progress]
    progress(id: String): Progress
    courses: [Course]
    course(id: Int): Course
    levels: [Level!]!
    level(id: Int!): Level!
    bundles: [Bundle]
    bundle(id: Int): Bundle
    languages: [Language!]!
    language(id: Int!): Language!
    lesson(id: Int): Lesson!
    lessons: [Lesson!]!
    words: [Word]
    word(id: Int!): Word!
    sentences: [Sentence]
    sentence(id: Int!): Sentence
    exercises: [Exercise]
    exercise(id: Int): Exercise
  }
  type Mutation {
    signinUser(email: String!, password: String!): AuthPayload
    createUser(
      email: String!
      password: String!
      name: String!
      surname: String!
      phoneNumber: Int
      phonePrefix: Int
    ): AuthPayload!
    editUser(
      id: String!
      email: String
      password: String
      name: String
      surname: String
      phoneNumber: Int
      phonePrefix: Int
    ): User
    deleteUser(id: String!): User
    createLanding(
      title: String!
      name: String!
      slug: String!
      content: String!
    ): Landing!
    editLanding(id: Int!, title: String, name: String, slug: String, content: String): Landing!
    editLanguage(id: Int!, name: String, logo: String): Language!
    editLevel(id: Int!, name: String, imageUrl: String, description: String): Level
    deleteLanding(id: Int!): Landing
    createOrder(userId: String!, courseId: Int!, bundleId: Int!): Order!
    deleteOrder(id: String!): Order
    createProgress(
      userId: String!
      courseId: Int!
      lessons: Int!
      exercises: Int!
      words: Int!
    ): Progress!
    deleteProgress(id: Int!): Progress
    createCourse(
      name: String!
      levelId: Int!
      bundleId: Int!
      languageId: Int!
    ): Course!
    deleteCourse(id: Int!): Course
    createLevel(name: String!, imageUrl: String, description: String): Level!
    deleteLevel(id: Int!): Level
    createBundle(
      name: String!
      content: String!
      price: Float!
      courseIds: [Int]!
    ): Bundle!
    deleteBundle(id: Int!): Bundle
    createLanguage(name: String!, logo: String!): Language!
    deleteLanguage(id: Int!): Language
    createLesson(
      name: String!, 
      languageId: Int,
      courseId: Int,
      wordIds: [Int], 
      sentenceIds: [Int],
      ): Lesson!
    editLesson(
      id: Int!,
      name: String,
      languageId: Int,
      courseId: Int,
      sentenceIds: [Int],
      wordIds: [Int], 
    ): Lesson
    deleteLesson(id: Int!): Lesson
    createWord(
      original: String!
      foreign: String!
      pronunciation: String!
      audioUrl: String!
      imageUrl: String!
      wordGroup: WORDGROUP
      lessonId: Int
      languageId: Int
    ): Word!
    editWord(
      id: Int!
      original: String
      foreign: String
      pronunciation: String
      audioUrl: String
      imageUrl: String
      wordGroup: WORDGROUP
      languageId: Int
    ): Word
    deleteWord(id: Int!): Word
    createSentence(original: String, foreign: String, pronunciation: String, audioUrl: String, languageId: Int, lessonId: Int): Sentence
    editSentence(id: Int!, original: String, foreign: String, pronunciation: String, audioUrl: String, languageId: Int, lessonId: Int): Sentence
    deleteSentence(id: Int!): Sentence
    createExercise(name: String!, lessonId: Int!): Exercise!
    editExercise(id: Int!, name: String, lessonId: Int): Exercise
    deleteExercise(id: Int!): Exercise
  }
`;
export default Schema;
