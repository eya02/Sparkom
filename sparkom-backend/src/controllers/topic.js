const Topic = require("../models/topic");
const _ = require("lodash");
const formidable = require("formidable");
const fs = require("fs");


const getAllTopics = (req, res) => {
  Topic.find((err, topics) => {
    if (err || !topics) return res.json({ error: err });
    res.json(topics);
  }).select("title");
};



const addTopic = (req, res) => {
  console.log(req.body);
  let form = new formidable.IncomingForm();
  const { text } = req.body;
  form.keepExtensions = true;
  let topic = new Topic({ text });
  form.parse(req, (err, fields, files) => {
    if (err)
      return res.json({ error: "Impossible d'ajouter le fichier séléctionné" });
    topic = _.extend(topic, fields);
    if (files.image) {
      topic.image.data = fs.readFileSync(files.image.path);
      topic.image.contentType = files.image.type;
    }
    topic.save((err, result) => {
      if (err) return res.json({ error: err });
      res.json(result);
    });
  })
};



const addFollower = (req, res) => {
  Topic.findByIdAndUpdate(
    req.body.topicId,
    { $push: { followers: req.body.userId } },
    { new: true }
  )
    .populate("followers", "_id name ")
    .exec((err, result) => {
      if (err) return res.json({ error: err });
      res.json(result);
    });
};



const getTopicPhoto = (req, res) => {
  if (req.topic.image.data) {
    res.set("Content-Type", req.topic.image.contentType);
    return res.send(req.topic.image.data);
  } else {
    return res.sendFile(
      "c:/xampp/htdocs/react-social-network-channel/backend/images/user.png"
    );
  }
};




const getTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.topicId);
    if (!topic) return res.status(404).send("Topic Not Found");
    res.send(topic);
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  getAllTopics,
  addTopic,
  addFollower,
  getTopicPhoto,
  getTopic,
};