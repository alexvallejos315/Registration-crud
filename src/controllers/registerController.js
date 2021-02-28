const controller = {};
controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM register_students", (err, register_students) => {
      if (err) {
        res.json(err);
      }
      res.render("register", {
        data: register_students,
      });
    });
  });
};

controller.save = (req, res) => {
  req.getConnection((err, conn) => {
    const data = req.body;
    conn.query(
      "INSERT INTO register_students set ?",
      [data],
      (err, register_students) => {
        res.redirect("/");
      }
    );
  });
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM register_students WHERE id=?",
      [id],
      (err, register_students) => {
        res.render("edit_register_form", {
          data: register_students[0],
        });
      }
    );
  });
};

controller.update = (req, res) => {
  const newregister = req.body;
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE register_students set ? WHERE id=?",
      [newregister, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

controller.delete = (req, res) => {
  req.getConnection((err, conn) => {
    const { id } = req.params;
    conn.query(
      "DELETE FROM register_students WHERE id=?",
      [id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

module.exports = controller;
