import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
        src:`01.jpg`,
        alt:'01',
        detail:' สำนักงานฝ่ายเสนาธิการในพระองค์ สำนักพระราชวัง จังหวัดเชียงใหม่ และมหาวิทยาลัยแม่โจ้ ร่วมประชุมเตรียมความพร้อมการรับเสด็จในพิธีพระราชทานปริญญาบัตรมหาวิทยาลัยแม่โจ้ ประจำปีการศึกษา 2564-2565 (ครั้งที่ 45)',
    },
    {
        src:'02.jpg',
        alt:'02',
        detail:'  มหาวิทยาลัยแม่โจ้ เข้าร่วมการแข่งขันกีฬามหาวิทยาลัยแห่งประเทศไทย ครั้งที่ 48 “ดอกจานบ้านเชียงเกมส์”',
    },
    {
        src:'03.jpg',
        alt:'03',
        detail:'  คณะสถาปัตย์ฯ ม.แม่โจ้ จัดกิจกรรมอบรมเชิงปฏิบัติการให้ความรู้  “สำนักงานสีเขียว”',
    },
    {
        src:'04.jpg',
        alt:'04',
        detail:' องค์การบริหารส่วนจังหวัดนครราชสีมา ศึกษาดูงาน “ระบบการทำฟาร์ม เกษตรสมัยใหม่ (4.0)”',
    },
    {
        src:'05.jpg',
        alt:'05',
        detail:' อบต.คลองปาง จ.ตรัง เข้าศึกษาดูงาน อพ.สธ.-มจ.',
    },
    {
        src:'06.jpg',
        alt:'06',
        detail:' ม.แม่โจ้ จัดพิธีทำบุญตักบาตร บำเพ็ญกุศลถวายพระพรแด่สมเด็จพระเจ้าลูกเธอ เจ้าฟ้าพัชรกิติยาภา นเรนทิราเทพยวดี กรมหลวงราชสาริณีสิริพัชร มหาวัชรราชธิดา ให้ทรงหายจากพระอาการประชวร',
    },
    {
        src:'07.jpg',
        alt:'07',
        detail:' มหาวิทยาลัยแม่โจ้ จัดพิธีลงนามบันทึกความเข้าใจความร่วมมือทางวิชาการ กับ สถาบันวิจัยและพัฒนาพื้นที่สูง (องค์การมหาชน)',
    },
    {
        src:'08.jpg',
        alt:'08',
        detail:' เป็นผู้แทนมหาวิทยาลัยแม่โจ้ เข้าร่วมงานในพิธีกระทำสัตย์ปฏิญาณตนต่อธงชัยเฉลิมพล ประจำปี 2566 วันกองทัพไทย',
    },
  ]);
  return {image};
});
