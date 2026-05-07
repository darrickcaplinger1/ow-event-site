/*
  数据维护说明：
  1. siteData.matches 只保留普通赛程，例如小组赛、瑞士轮、表演赛等。
  2. 淘汰赛不再在 siteData.matches 里重复手填。请写在 brackets[eventId] 的 rounds / tiers / extraRounds 里。
  3. main.js 会自动把 brackets 里的每场比赛展开到首页近期赛程、赛事子页面比赛列表和 schedule.html。
*/

const siteData = {
  "events": [
    {
      "id": "dragonblade-cup",
      "title": "北美守望先锋龙刃杯",
      "coverTitle": "Dragonblade Cup",
      "game": "Overwatch",
      "status": "open",
      "statusText": "报名中",
      "registerTime": "2026/3/13 - 2026/3/18",
      "matchTime": "2026/3/21 - 2026/3/29",
      "teamsLimit": "16",
      "description": "大锤杯承办的北美守望先锋赛事，奖金池将达到￥20000",
      "detailUrl": "event-dragonbladecup.html",
      "cover": "images/dragonbladecup.png"
    },
    {
      "id": "0701-cup",
      "title": "0701杯",
      "coverTitle": "0701 Cup",
      "game": "Overwatch",
      "status": "finished",
      "statusText": "已结束",
      "registerTime": "2026/3/13 - 2026/3/18",
      "matchTime": "2026/3/21 - 2026/3/29",
      "teamsLimit": "16",
      "description": "由0701主办，守望先锋大锤杯承办的赛事。总奖金池￥10000。",
      "detailUrl": "0701-cup.html",
      "cover": "images/0701cup.png"
    },
    {
      "id": "city-league-s1",
      "title": "百城之巅联赛第一赛季",
      "coverTitle": "City League Season 1",
      "game": "Overwatch",
      "status": "finished",
      "statusText": "已结束",
      "registerTime": "2025/12/16 - 2026/1/3",
      "matchTime": "2026/1/5 - 2026/2/8",
      "teamsLimit": "512",
      "description": "《守望先锋百城之巅联赛》第一赛季由 @超级白鸽_ @口巴口即 @FADE_ow 联合主办。",
      "detailUrl": "event-cityleague1.html",
      "cover": "images/cityleague1.jpg"
    },
    {
      "id": "Hammer Cup S10",
      "title": "大锤杯S10",
      "coverTitle": "Hammer Cup Season 10",
      "game": "Overwatch",
      "status": "finished",
      "statusText": "已结束",
      "registerTime": "2025/10/24 - 2025/10/29",
      "matchTime": "2025/11/14 - 2025/11/28",
      "teamsLimit": "64",
      "description": "守望先锋大锤杯S10，面向全玩家的社区赛事",
      "detailUrl": "event-hammercup10.html",
      "cover": "images/hammercup10.png"
    }
  ],
  "news": [
    {
      "date": "2026.04.29",
      "title": "百城之巅联赛第二赛段即将开始",
      "content": "赛事报名通道即将开放，队长可通过官网报名页提交队伍信息。具体报名时间与规则请关注后续公告。"
    }
  ],
  "matches": [
    {
      "id": "match-024",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 D组",
      "date": "2026.02.01",
      "time": "22:30",
      "teamA": "成都香草菲尼",
      "teamB": "牡丹江ASDJ",
      "scoreA": "0",
      "scoreB": "3",
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-012",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 B组",
      "date": "2026.02.01",
      "time": "22:30",
      "teamA": "香港金衝蹦",
      "teamB": "成都摩西摩西队",
      "scoreA": 3,
      "scoreB": 0,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-023",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 D组",
      "date": "2026.02.01",
      "time": "21:00",
      "teamA": "重庆复活队",
      "teamB": "济南泰戈尔队",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-011",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 B组",
      "date": "2026.02.01",
      "time": "21:00",
      "teamA": "沈阳M庄园",
      "teamB": "成都人机队",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-006",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 A组",
      "date": "2026.02.01",
      "time": "19:30",
      "teamA": "上海星之队",
      "teamB": "温州P6R",
      "scoreA": "0",
      "scoreB": "3",
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-018",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 C组",
      "date": "2026.02.01",
      "time": "19:30",
      "teamA": "郑州豫米",
      "teamB": "宜春老表别打我",
      "scoreA": 1,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-005",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 A组",
      "date": "2026.02.01",
      "time": "18:00",
      "teamA": "武汉小龙虾",
      "teamB": "开封路边井盖队",
      "scoreA": 3,
      "scoreB": 1,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-017",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 C组",
      "date": "2026.02.01",
      "time": "18:00",
      "teamA": "广州蟹堡王",
      "teamB": "上海HuNeng Gaming",
      "scoreA": 3,
      "scoreB": 2,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-010",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 B组",
      "date": "2026.01.31",
      "time": "22:30",
      "teamA": "香港金衝蹦",
      "teamB": "沈阳M庄园",
      "scoreA": 3,
      "scoreB": 0,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-016",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 C组",
      "date": "2026.01.31",
      "time": "22:30",
      "teamA": "郑州豫米",
      "teamB": "广州蟹堡王",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-004",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 A组",
      "date": "2026.01.31",
      "time": "22:30",
      "teamA": "上海星之队",
      "teamB": "武汉小龙虾",
      "scoreA": 2,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-015",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 C组",
      "date": "2026.01.31",
      "time": "21:00",
      "teamA": "宜春老表别打我",
      "teamB": "上海HuNeng Gaming",
      "scoreA": 3,
      "scoreB": 0,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-003",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 A组",
      "date": "2026.01.31",
      "time": "21:00",
      "teamA": "温州P6R",
      "teamB": "开封路边井盖队",
      "scoreA": 3,
      "scoreB": 0,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-022",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 D组",
      "date": "2026.01.31",
      "time": "19:30",
      "teamA": "成都香草菲尼",
      "teamB": "重庆复活队",
      "scoreA": 1,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-009",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 B组",
      "date": "2026.01.31",
      "time": "18:00",
      "teamA": "成都摩西摩西队",
      "teamB": "成都人机队",
      "scoreA": 3,
      "scoreB": 1,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-021",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 D组",
      "date": "2026.01.31",
      "time": "18:00",
      "teamA": "牡丹江ASDJ",
      "teamB": "济南泰戈尔队",
      "scoreA": 1,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-008",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 B组",
      "date": "2026.01.30",
      "time": "22:30",
      "teamA": "沈阳M庄园",
      "teamB": "成都摩西摩西队",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-020",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 D组",
      "date": "2026.01.30",
      "time": "22:30",
      "teamA": "重庆复活队",
      "teamB": "牡丹江ASDJ",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-007",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 B组",
      "date": "2026.01.30",
      "time": "21:00",
      "teamA": "成都人机队",
      "teamB": "香港金衝蹦",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-019",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 D组",
      "date": "2026.01.30",
      "time": "21:00",
      "teamA": "济南泰戈尔队",
      "teamB": "成都香草菲尼",
      "scoreA": 3,
      "scoreB": 0,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-014",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 C组",
      "date": "2026.01.30",
      "time": "19:30",
      "teamA": "广州蟹堡王",
      "teamB": "宜春老表别打我",
      "scoreA": 3,
      "scoreB": 1,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-002",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 A组",
      "date": "2026.01.30",
      "time": "19:30",
      "teamA": "开封路边井盖队",
      "teamB": "上海星之队",
      "scoreA": 3,
      "scoreB": 2,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-013",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 C组",
      "date": "2026.01.30",
      "time": "18:00",
      "teamA": "上海HuNeng Gaming",
      "teamB": "郑州豫米",
      "scoreA": 3,
      "scoreB": 1,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    },
    {
      "id": "match-001",
      "eventId": "city-league-s1",
      "eventTitle": "百城之巅联赛第一赛季",
      "stage": "小组赛 A组",
      "date": "2026.01.30",
      "time": "18:00",
      "teamA": "武汉小龙虾",
      "teamB": "温州P6R",
      "scoreA": 0,
      "scoreB": 3,
      "format": "BO5",
      "status": "finished",
      "statusText": "已结束",
      "streamUrl": "#"
    }
  ],
  "eventParticipants": {
    "city-league-s1": [
      {
        "name": "温州P6R",
        "badge": "P",
        "logo": "teamlogos/cityleague1logos/东部-温州P6R.png",
        "members": [
          { "role": "输出", "id": "选手A1" },
          { "role": "输出", "id": "选手A2" },
          { "role": "坦克", "id": "选手A3" },
          { "role": "支援", "id": "选手A4" },
          { "role": "支援", "id": "选手A5" },
          { "role": "教练", "id": "教练A" },
          { "role": "经理", "id": "经理A" }
        ]
      },
      {
        "name": "济南泰戈尔队",
        "badge": "济",
        "logo": "teamlogos/cityleague1logos/东部-济南泰戈尔队.jpg",
        "members": [
          { "role": "输出", "id": "选手B1" },
          { "role": "输出", "id": "选手B2" },
          { "role": "坦克", "id": "选手B3" },
          { "role": "支援", "id": "选手B4" },
          { "role": "支援", "id": "选手B5" },
          { "role": "教练", "id": "教练B" }
        ]
      },
      {
        "name": "香港金衝蹦",
        "badge": "金",
        "logo": "teamlogos/cityleague1logos/东部-香港金衝蹦.jpg",
        "members": [
          { "role": "输出", "id": "选手C1" },
          { "role": "输出", "id": "选手C2" },
          { "role": "坦克", "id": "选手C3" },
          { "role": "支援", "id": "选手C4" },
          { "role": "支援", "id": "选手C5" },
          { "role": "经理", "id": "经理C" }
        ]
      },
      {
        "name": "广州蟹堡王",
        "badge": "蟹",
        "logo": "",
        "members": [
          { "role": "输出", "id": "选手D1" },
          { "role": "输出", "id": "选手D2" },
          { "role": "坦克", "id": "选手D3" },
          { "role": "支援", "id": "选手D4" },
          { "role": "支援", "id": "选手D5" },
          { "role": "教练", "id": "教练D" },
          { "role": "经理", "id": "经理D" }
        ]
      },
      {
        "name": "牡丹江ASDJ",
        "badge": "牡",
        "logo": "",
        "members": [
          { "role": "输出", "id": "选手E1" },
          { "role": "输出", "id": "选手E2" },
          { "role": "坦克", "id": "选手E3" },
          { "role": "支援", "id": "选手E4" },
          { "role": "支援", "id": "选手E5" }
        ]
      },
      {
        "name": "武汉小龙虾",
        "badge": "武",
        "logo": "",
        "members": [
          { "role": "输出", "id": "选手F1" },
          { "role": "输出", "id": "选手F2" },
          { "role": "坦克", "id": "选手F3" },
          { "role": "支援", "id": "选手F4" },
          { "role": "支援", "id": "选手F5" }
        ]
      },
      {
        "name": "宜春老表别打我",
        "badge": "宜",
        "logo": "",
        "members": [
          { "role": "输出", "id": "选手G1" },
          { "role": "输出", "id": "选手G2" },
          { "role": "坦克", "id": "选手G3" },
          { "role": "支援", "id": "选手G4" },
          { "role": "支援", "id": "选手G5" }
        ]
      },
      {
        "name": "成都摩西摩西队",
        "badge": "成",
        "logo": "",
        "members": [
          { "role": "输出", "id": "选手H1" },
          { "role": "输出", "id": "选手H2" },
          { "role": "坦克", "id": "选手H3" },
          { "role": "支援", "id": "选手H4" },
          { "role": "支援", "id": "选手H5" }
        ]
      }
    ]
  }
};

const brackets = {

  "dragonblade-cup": {
    "type": "double-16-simple",
    "stagePrefix": "16强双败淘汰赛",
    "tiers": [
      {
        "type": "winners",
        "tag": "UPPER BRACKET",
        "title": "胜者组",
        "rounds": [
          {
            "title": "胜者组首轮",
            "matches": [
              {
                "id": "dbc-wb-r1-01",
                "date": "2026.05.09",
                "time": "18:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "1",
                    "name": "1号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "16",
                    "name": "16号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-02",
                "date": "2026.05.09",
                "time": "19:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "8",
                    "name": "8号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "9",
                    "name": "9号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-03",
                "date": "2026.05.09",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "4",
                    "name": "4号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "13",
                    "name": "13号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-04",
                "date": "2026.05.09",
                "time": "22:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "5",
                    "name": "5号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "12",
                    "name": "12号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-05",
                "date": "2026.05.10",
                "time": "18:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "2",
                    "name": "2号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "15",
                    "name": "15号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-06",
                "date": "2026.05.10",
                "time": "19:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "7",
                    "name": "7号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "10",
                    "name": "10号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-07",
                "date": "2026.05.10",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "3",
                    "name": "3号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "14",
                    "name": "14号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r1-08",
                "date": "2026.05.10",
                "time": "22:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "6",
                    "name": "6号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "11",
                    "name": "11号种子",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "胜者组第二轮",
            "matches": [
              {
                "id": "dbc-wb-r2-01",
                "date": "2026.05.11",
                "time": "18:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r2-02",
                "date": "2026.05.11",
                "time": "19:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB3胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB4胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r2-03",
                "date": "2026.05.11",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB5胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB6胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-r2-04",
                "date": "2026.05.11",
                "time": "22:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB7胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB8胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "胜者组半决赛",
            "matches": [
              {
                "id": "dbc-wb-sf-01",
                "date": "2026.05.13",
                "time": "19:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB R2-1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB R2-2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-wb-sf-02",
                "date": "2026.05.13",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB R2-3胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB R2-4胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "胜者组决赛",
            "matches": [
              {
                "id": "dbc-wb-final-01",
                "date": "2026.05.16",
                "time": "20:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "胜者组半决赛1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "胜者组半决赛2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "type": "lower",
        "tag": "LOWER BRACKET",
        "title": "败者组",
        "rounds": [
          {
            "title": "败者组第一轮",
            "matches": [
              {
                "id": "dbc-lb-r1-01",
                "date": "2026.05.11",
                "time": "18:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB1败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB2败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r1-02",
                "date": "2026.05.11",
                "time": "19:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB3败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB4败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r1-03",
                "date": "2026.05.11",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB5败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB6败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r1-04",
                "date": "2026.05.11",
                "time": "22:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "WB7败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB8败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "败者组第二轮",
            "matches": [
              {
                "id": "dbc-lb-r2-01",
                "date": "2026.05.12",
                "time": "18:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R1-1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB R2-1败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r2-02",
                "date": "2026.05.12",
                "time": "19:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R1-2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB R2-2败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r2-03",
                "date": "2026.05.12",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R1-3胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB R2-3败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r2-04",
                "date": "2026.05.12",
                "time": "22:30",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R1-4胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB R2-4败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "败者组第三轮",
            "matches": [
              {
                "id": "dbc-lb-r3-01",
                "date": "2026.05.14",
                "time": "19:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R2-1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "LB R2-2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r3-02",
                "date": "2026.05.14",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R2-3胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "LB R2-4胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "败者组第四轮",
            "matches": [
              {
                "id": "dbc-lb-r4-01",
                "date": "2026.05.15",
                "time": "19:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R3-1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB SF-1败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              },
              {
                "id": "dbc-lb-r4-02",
                "date": "2026.05.15",
                "time": "21:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R3-2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "WB SF-2败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "败者组第五轮",
            "matches": [
              {
                "id": "dbc-lb-r5-01",
                "date": "2026.05.16",
                "time": "18:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "LB R4-1胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "LB R4-2胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          },
          {
            "title": "败者组决赛",
            "matches": [
              {
                "id": "dbc-lb-final-01",
                "date": "2026.05.17",
                "time": "19:00",
                "format": "BO5",
                "status": "scheduled",
                "statusText": "未开始",
                "streamUrl": "#",
                "teams": [
                  {
                    "seed": "",
                    "name": "败者组第五轮胜者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  },
                  {
                    "seed": "",
                    "name": "胜者组决赛败者",
                    "score": "",
                    "winner": false,
                    "placeholder": true
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    "extraRounds": [
      {
        "title": "总决赛",
        "matches": [
          {
            "id": "dbc-grand-final-01",
            "date": "2026.05.17",
            "time": "21:00",
            "format": "BO7",
            "status": "scheduled",
            "statusText": "未开始",
            "streamUrl": "#",
            "teams": [
              {
                "seed": "",
                "name": "胜者组冠军",
                "score": "",
                "winner": false,
                "placeholder": true
              },
              {
                "seed": "",
                "name": "败者组冠军",
                "score": "",
                "winner": false,
                "placeholder": true
              }
            ]
          }
        ]
      },
    ]
  }
,
  "city-league-s1": {
    "type": "single-8-simple",
    "stagePrefix": "淘汰赛",
    "rounds": [
      {
        "title": "八强赛",
        "matches": [
          {
            "id": "match-025",
            "date": "2026.02.06",
            "time": "18:00",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "#",
            "teams": [
              {
                "seed": "A1",
                "name": "温州P6R",
                "score": "3",
                "winner": true
              },
              {
                "seed": "D2",
                "name": "牡丹江ASDJ",
                "score": "0",
                "winner": false
              }
            ]
          },
          {
            "id": "match-026",
            "date": "2026.02.06",
            "time": "21:00",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1EHF7zwEag",
            "teams": [
              {
                "seed": "D1",
                "name": "济南泰戈尔队",
                "score": 3,
                "winner": true
              },
              {
                "seed": "A2",
                "name": "武汉小龙虾",
                "score": 1,
                "winner": false
              }
            ]
          },
          {
            "id": "match-027",
            "date": "2026.02.06",
            "time": "19:30",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1xKF7zGED3",
            "teams": [
              {
                "seed": "B1",
                "name": "香港金衝蹦",
                "score": 3,
                "winner": true
              },
              {
                "seed": "C2",
                "name": "宜春老表别打我",
                "score": 1,
                "winner": false
              }
            ]
          },
          {
            "id": "match-028",
            "date": "2026.02.06",
            "time": "22:30",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1jxF7zbEnm",
            "teams": [
              {
                "seed": "C1",
                "name": "广州蟹堡王",
                "score": 3,
                "winner": true
              },
              {
                "seed": "B2",
                "name": "成都摩西摩西队",
                "score": 0,
                "winner": false
              }
            ]
          }
        ]
      },
      {
        "title": "半决赛",
        "matches": [
          {
            "id": "match-029",
            "date": "2026.02.07",
            "time": "19:00",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1boFxzgEms",
            "teams": [
              {
                "seed": "",
                "name": "温州P6R",
                "score": 3,
                "winner": true
              },
              {
                "seed": "",
                "name": "济南泰戈尔队",
                "score": 0,
                "winner": false
              }
            ]
          },
          {
            "id": "match-030",
            "date": "2026.02.07",
            "time": "21:00",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1MFF4zMENt",
            "teams": [
              {
                "seed": "",
                "name": "香港金衝蹦",
                "score": 0,
                "winner": false
              },
              {
                "seed": "",
                "name": "广州蟹堡王",
                "score": 3,
                "winner": true
              }
            ]
          }
        ]
      },
      {
        "title": "总决赛",
        "matches": [
          {
            "id": "match-032",
            "date": "2026.02.08",
            "time": "21:00",
            "format": "BO7",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1V8ccz1ERJ",
            "teams": [
              {
                "seed": "",
                "name": "温州P6R",
                "score": 4,
                "winner": true
              },
              {
                "seed": "",
                "name": "广州蟹堡王",
                "score": 0,
                "winner": false
              }
            ]
          }
        ]
      }
    ],
    "extraRounds": [
      {
        "title": "季军赛",
        "matches": [
          {
            "id": "match-031",
            "date": "2026.02.08",
            "time": "19:00",
            "format": "BO5",
            "status": "finished",
            "statusText": "已结束",
            "streamUrl": "https://www.bilibili.com/video/BV1n5cczdEKB",
            "teams": [
              {
                "seed": "",
                "name": "济南泰戈尔队",
                "score": 3,
                "winner": true
              },
              {
                "seed": "",
                "name": "香港金衝蹦",
                "score": 1,
                "winner": false
              }
            ]
          }
        ]
      }
    ]
  }
};

if (typeof window !== "undefined") {
  window.siteData = siteData;
  window.brackets = brackets;
}
