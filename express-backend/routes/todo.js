const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Todo = require("../models/Todo");

// DO NOT COMMIT
const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXwIBAAKBgQDchYECKyvg/j2IPJR8SQbMBKMELKyPI69tzZCd+cQZ2eq76Fwa
73BvBWpugdt5jzS4Ykmzj3SItoEcZeTibahIbH/5XPXMaoSVmCN2fIDtJW7cnPg7
6tZOESQ7a7eCR+nmt+JNR2DlR4HVsDVpF4Fa0TUrz5y2r3tANXFpfpjzRwIDAQAB
AoGBAM0ZtmVn9cWrcVt2zLvTx+iVH3FQg6YWEKHVoX3swcExdysR8Ch1LmNz7Auf
55tl4Cjl8Zp6AG7vH6Jj+r/GMc5/rIARv0McxP33tK2V9FT+vZcAhsPYzDpm1evR
HoaTQfEsJF+mdhfRFCVpmovoxxf1wJZ8M1GzGGe7DjVl42yxAkEA/A4KJip4RVkC
X8U8HvdRCkiuqx12VjMFhd7f+3u0PGKMX2B7+NEzaVNTgM8MP7f+p1p45be68O3I
Gu9x1+jP/QJBAN/5HPVLrHXXWxcG0qi5atY8Ize93//vrsXzTjAGNy+ahPdBosKd
G6qkC2erjb2otyNO/ifRhYHhbgr6DHciKZMCQQDZWjoCQ2lHU8QqVejMQzTNC3Qj
9toO5xyCHnlDYZ9A2zJ1JLyDCdOtpb9COkkzwTSFmAzc+xznmgSOxaCEMSz5AkEA
zdN99EK125msYU3o3BuBfh3H85rvtqFKiSmeSe38WyfyV9OewqBk431b6cqzOH9K
xgz67hbTTVegrD+8ouLnNwJBANOqHKOSdHmhYnUV/IiTiofEbKPxEar2WWtdhaRv
JTWy60PxCJXhEp6q5CgTeYTbMqc4DMfwjW+ZSHsTdO3EBu0=
-----END RSA PRIVATE KEY-----`

router.use(function (req, res, next) {
	if (req.header("Authorization")) {
		try {
			req.payload = jwt.verify(req.header("Authorization"), privateKey, {
				algorithms: ["RS256"],
			});
		} catch (error) {
			return res.status(401).json({ error: error.message });
		}
	} else {
		return res.status(401).json({ error: "Unauthorized" });
	}
	next();
});

router.post("/", async function (req, res) {
    const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    author: req.payload.id,
    dateCreated: req.body.dateCreated,
    dateCompleted: req.body.dateCompleted,
    complete: req.body.complete,
    });
    	return todo
            .save()
            .then((savedTodo) => {
                return res.status(201).json({
                    id: savedTodo._id,
                    title: savedTodo.title,
                    content: savedTodo.content,
                    author: savedTodo.author,
                    dateCreated: savedTodo.dateCreated,
                    dateCompleted: savedTodo.dateCompleted,
                    complete: savedTodo.complete
                });
            })
    .catch((error) => {
        return res.status(500).json({ error: error.message });
    });
});

router.get("/", async function (req, res, next) {
    const todos = await Todo.find().where("author").equals(req.payload.id).exec();
    return res.status(200).json({ todos: todos });
    });
    

module.exports = router;
