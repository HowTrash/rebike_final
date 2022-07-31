const contents = {
  GLASS: {
    kind: "유리",
    tag: "#소주병 #맥주병 #와인병 #콜라병 #사이다병 #탄산음료병",
    method1: "-내용물을 비우고, 물로 깨끗히 세척해서 배출해요. ",
    method2: "-병뚜껑은 캔류 (철) 로 따로 배출해요.",
    method3:
      "-보증금 환불이 가능한 보증금병은 마트 등에 반납하면 적혀있는 금액의 보증금을 환급받을 수 있어요.",
    warning: `깨진 유리병, 유리컵, 자기 그릇, 거울, 전구 등 병류가 아닌 유리제품은 유리로 분리수거가 안돼요.
      타거나 썩는 물건만 버리는 일반 종량제 봉투가 아닌 불연성 종량제 봉투에 담아서 버려주세요.`,
  },

  BIODEGRADABLE: {
    kind: "음식물 쓰레기",
    tag: "#과일껍질 #과일씨 #과일줄기",
    method1: "-일반적으로 쉽게 분해되는 부드러운 과일 껍질은 음식물 쓰레기",
    method2: "-양념이 묻은 음식물은 물에 한번 헹군 후 음식물쓰레기로 버려요.",
    method3:
      "-비교적 크기가 작고, 강도가 낮은 과일 씨와 씨방은 음식물 쓰레기로 버려요. (사과, 배)",
    warning:
      "단단한 과일 껍질은 일반쓰레기(종량제 봉투)로 버려요. (아보카도, 자두, 복숭아, 살구, 감)",
  },

  CARDBOARD: {
    kind: "판지",
    tag: "#상자 #골판지 #택배박스 #포장박스",
    method1: "-물이나 이물질을 묻지 않게 하고 구겨지지 않게 배출해요.",
    method2: "-택배 송장, 테이프, 철핀 등은 깨끗이 떼어냅니다.",
    method3:
      "-종이와 종이팩 은 다른 방식으로 재활용돼요. 반드시 종이팩이 아닌 종이 로 분리 배출하세요.",
    warning:
      "이물질에 오염되어 세척이 불가능한 종이류는 일반쓰레기(종량제봉투)로 버려주세요.",
  },
  METAL: {
    kind: "금속",
    tag: "#통조림 #맥주캔 #콜라캔 #음료수캔",
    method1: "-라벨, 스티커 등이 붙어있을 경우 깨끗하게 떼어낸 후 버려요.",
    method2: "-내용물을 비우고, 물로 깨끗히 헹궈요.",
    method3: "-플라스틱 뚜껑 등 다른 재질은 분리해서 배출해요.",
    warning:
      "캔류의 수거 장소가 종류에 따라 나뉘어져 있으면 캔류(알미늄)과 캔류(철) 로 분리 배출하고, 그렇지 않으면 다른 고철들과 함께 캔류  로 분리 배출해요.",
  },

  PAPER: {
    kind: "종이",
    tag: "#A4용지 #신문지 #고지서 #포스트잇 #휴지심",
    method1: "-물이나 이물질을 묻지 않게 하고 구겨지지 않게 배출해요.",
    method2: "-신문지는 함께 끈으로 묶어서 배출하면 좋아요.",
    method3:
      "-고지서는 주소, 이름 등의 개인정보가 인쇄된 부분은 잘라서 일반쓰레기로 버리고 나머지는 종이로 배출하면 돼요.",
    warning:
      "다른 재질이 합성된 종이나 오염된 종이는 재활용이 불가능해요. 일반쓰레기(종량제봉투)로 버려주세요.",
  },

  PLASTIC: {
    kind: "플라스틱",
    tag: "#세제통 #우유통 #일회용플라스틱 #생수병 #맥주병",
    method1:
      "-내용물을 비우고 물로 헹구는 등 이물질을 제거하여 배출합니다. 번거롭더라도 잘 지워지지 않는 기름기는 세제를 사용하여 세척합니다.",
    method2:
      "-분리배출 표시를 확인하고 부착상표, 부속품 등 본체와 다른 재질은 떼어내거나 가위나 칼등으로 해당 부위만 분리제거한 후 배출합니다.",
    method3:
      "-상표, 뚜껑 등이 다른 재질이라면 분리해서 재질별로 나눠서 배출해요.",
    warning:
      "제품마다 적혀있는 분리배출 기호를 확인하고, 분리배출 장소가 나뉘어져 있으면 재질별로, 그렇지 않으면 플라스틱 으로 배출하세요",
  },
  CHALLENGE: [
    {
      id: 1,
      imgT: "https://i.ibb.co/WvxdQFY/003-1.png",
      imgF: "https://i.ibb.co/f2W2S56/004.png",
      test: "1️⃣ 첫 분리수거 시작!",
    },
    {
      id: 2,
      imgT: "https://i.ibb.co/H2sjHm9/001.png",
      imgF: "https://i.ibb.co/f8hZNfD/002.png",
      test: "3️⃣ 분리수거함 쌓여가는 중...",
    },
    {
      id: 3,
      imgT: "https://i.ibb.co/pPLCXxb/005-1.png",
      imgF: "https://i.ibb.co/XzcL76V/006.png",
      test: "5️⃣ 벌써 5번째 분리수거",
    },
    {
      id: 4,
      imgT: "https://i.ibb.co/j5dDHQy/007.png",
      imgF: "https://i.ibb.co/pjMpRmS/008.png",
      test: "7️⃣ 행운의 7번째 분리수거!",
    },
    {
      id: 5,
      imgT: "https://i.ibb.co/S6Z7yjx/009.png",
      imgF: "https://i.ibb.co/qFd500m/010.png",
      test: "👏 10번째 달성",
    },
  ],
};

export default contents;

export const DOMAIN = "localhost";

export const API_BASE_URL = `http://${DOMAIN}:8080`;
