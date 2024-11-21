const axios = require('axios');
const fs = require('node:fs');
const cheerio = require('cheerio');

const fetchPage = async () => {
    try{
        const response = await axios.get("https://www.shopclues.com/search?q=smartphone&cid=1431&auto_suggest=1&seq=0&type=category&token=smartpho&count=10&user_id=&user_segment=default&z=0");
        fs.writeFile("data.txt", response.data, (err)=>{
            if(err) throw console.error(err);
            console.log("FILE CREATED SUCCESSFULLY !!");
            processData();
        })
        
    }catch(err){
        console.error(err);
    }
}
// fetchPage();

const jsonData = [];

const processData = () => {
    const htmlData = fs.readFileSync("./data.txt", { encoding: "utf-8" });
    const $ = cheerio.load(htmlData);
    const titles = $(".myTitle");
    const prices = $(".ori_price .p_price");
    titles.each((index, elemet) => {
        const title = $(elemet).text();
        jsonData.push({
            title: title
        })
        // console.log(title);
    });
    prices.each((index, element)=>{
        const price = $(element).text();
        jsonData[index]["price"] = price;
        // console.log(price);
    })
    fs.writeFile("mobile-data.json", JSON.stringify(jsonData), (err)=>{
        if(err) throw console.error(err);
        console.log("JSON file created successfully");
    })
}

processData();