const express = require("express");
const credentials = require("../config.json");
const { GoogleSpreadsheet } = require("google-spreadsheet");
const router = express.Router();

router.get("/team/", async (req, res, next) => {
  try {
    const team = new GoogleSpreadsheet(
      "124guwEjc7R_D7vGsppeW2pQBkFJuqH6pt5a8qY0aya4"
    );
    await team.useServiceAccountAuth(credentials);
    await team.loadInfo();

    const sheet = team.sheetsByIndex[0];
    const rows = await sheet.getRows();
    res.status(200).json({
      data: rows.map((row) => ({
        name: row["Name"],
        description: row["Descrip"],
      })),
      message:
        "Success! Collected all team sheets information from DCS Team '21-22.",
    });
  } catch (error) {
    return next(error);
  }
});

router.get("/members/", async (req, res, next) => {
  try {
    const team = new GoogleSpreadsheet(
      "1lcp2ovegwMb3Zb0r6l9-Y5gDKvCDYae06-nj_50iiog"
    );
    await team.useServiceAccountAuth(credentials);
    await team.loadInfo();

    const sheet = team.sheetsByIndex[0];
    const rows = await sheet.getRows();
    res.status(200).json({
      data: rows.map((row) => ({
        name: row["Name"],
        email: row["Email"],
        position: row["Position"],
        bio: row["Bio"],
      })),
      message:
        "Success! Collected all member sheets information from DCS Team '21-22.",
    });
  } catch (error) {
    return next(error);
  }
});
module.exports = router;
