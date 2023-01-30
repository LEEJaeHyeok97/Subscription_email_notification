import express from "express";
import { Subscription } from "../../models";


const router = express.Router();

//구독 정보(상품명, 구독시작일) 저장
router.post("/", async(req, res) => {
    const paymentDate = req.body.paymentDate;
    const productName = req.body.productName;



    const newSub = await Subscription.create({
        productName: productName,
        expireDate: parseInt(paymentDate) + 10
    });

    return res.json({
        data: "구독정보가 등록되었습니다."
    });
})

//구독 정보 수정


//구독 정보 삭제

//구독 정보 확인


export default router;