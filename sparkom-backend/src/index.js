const express = require("express");
const cors = require("cors");
const connectToDB = require("../config/db");
const path = require("path");
const helmet = require("helmet");

//* Importe USER Routes
const userRouter = require("./routers/user.router");
const profileRouter = require("./routers/profile.router");
const postRouter = require("./routers/postAz.router");
const domainRouter = require("./routers/domain.router");
const skillRouter = require("./routers/skill.router");
const badgeRouter = require("./routers/badge.router");
const cvRouter = require("./routers/cv.router");
//* IMPORTE JOBS Routes
const CompanyRouter = require("./routers/company.rounter");
const Jobtype = require("./routers/job_type.router");
const Postedon = require("./routers/posted_on.router");
const Job = require("./routers/job.router");
const Schedule = require("./routers/schedule.router");

//************************************** Boards Routes ****************************/
var cardC = require("./Models/cards");
const nodemailer = require("nodemailer");
var boardRouter = require("./routers/boards");
var listRouter = require("./routers/lists");
var cardRouter = require("./routers/cards");
const bodyParser = require("body-parser");
//************************************** Events Routes ****************************/
var groupRouter = require("./routers/group");
var eventRouter = require("./routers/event");
var postGrRouter = require("./routers/postGr");
var eventC = require("./models/event");
//************************************** Post Routes ****************************/
const postRoutes = require("./routers/post");
const topicRoutes = require("./routers/topic");
const questionRoutes = require("./routers/question");

//**************************/
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());

//* Connect to DB
connectToDB();

// Define Routes
app.use("/users", userRouter);
app.use("/profile/me", profileRouter);
app.use("/posts", postRouter);
app.use("/domains", domainRouter);
app.use("/skills", skillRouter);
app.use("/badges", badgeRouter);
app.use("/cv", cvRouter);

//****** JOB  */
app.use("/company", CompanyRouter);
app.use("/jobtype", Jobtype);
app.use("/postedon", Postedon);
app.use("/job", Job);
app.use("/Schedule", Schedule);
app.use("/public", express.static("./public"));
//****** Boards */
app.use("/boards", boardRouter);
app.use("/lists", listRouter);
app.use("/cards", cardRouter);
//************* Events */
app.use("/group", groupRouter);
app.use("/event", eventRouter);
app.use("/", postGrRouter);
//***************** Post ********/
app.use("/", postRoutes);
app.use("/", topicRoutes);
app.use("/", questionRoutes);
//***************************** Mailing *****************************/
app.post("/send_mail", cors(), async (req, res) => {
  let { text2 } = req.body;
  let { mail } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: mail,
    subject: "test email",
    html: `<div className="email" style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
    ">
    <h2>Here is your email!</h2>
    <p>${text2}</p>
    <p> All the best ,Sparkom</p>
    </div>`,
  });
});

app.use(express.static(path.join(__dirname, "public")));
app.use("/public", express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Connected on Port ${PORT}`);
});

const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/live", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);

    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

server.listen(3006);
