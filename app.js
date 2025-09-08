{\rtf1\ansi\ansicpg949\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // 6\uc0\u44060 \u50900 \u52824  \u47336 \u54004  DB (\u50696 \u49884 : \u49892 \u51228 \u47196 \u45716  \u45804 \u47560 \u45796  \u49464 \u48512  \u51312 \u51221  \u44032 \u45733 )\
const routines = \{\
  "2025-09-08": ["\uc0\u50724 \u48260 \u54756 \u46300  \u45924 \u48296  \u54532 \u47112 \u49828  4\u49464 \u53944  \'d7 10~12\u54924 ", "\u49324 \u51060 \u46300  \u47112 \u53552 \u47092  \u47112 \u51060 \u51592  4\u49464 \u53944  \'d7 12~15\u54924 ", "\u45924 \u48296  \u48292 \u52824 \u54532 \u47112 \u49828  4\u49464 \u53944  \'d7 8~12\u54924 ", "\u53944 \u46972 \u51060 \u49481 \u49828  \u53413 \u48177  3\u49464 \u53944  \'d7 12~15\u54924 "],\
  "2025-09-09": ["\uc0\u54400 \u50629  or \u47019 \u54400 \u45796 \u50868  4\u49464 \u53944  \'d7 8~10\u54924 ", "\u50896 \u50516  \u45924 \u48296  \u47196 \u50864  4\u49464 \u53944  \'d7 10\u54924 ", "\u54168 \u51060 \u49828  \u54400  4\u49464 \u53944  \'d7 12~15\u54924 ", "\u45924 \u48296  \u52972  3\u49464 \u53944  \'d7 10~12\u54924 "]\
  // \uc0\u50668 \u44592  \u51060 \u54980  \u45216 \u51676 \u46020  \u44057 \u51008  \u54805 \u49885 \u51004 \u47196  \u52628 \u44032  \u44032 \u45733 \
\};\
\
// \uc0\u50724 \u45720  \u45216 \u51676  \u44032 \u51256 \u50724 \u44592 \
const today = new Date().toISOString().split("T")[0];\
const routineDiv = document.getElementById("routine");\
\
if (routines[today]) \{\
  routines[today].forEach((workout) => \{\
    const item = document.createElement("div");\
    item.className = "routine-item";\
    item.innerHTML = `<span>$\{workout\}</span> <button onclick="toggleDone(this)">\uc0\u10004 </button>`;\
    routineDiv.appendChild(item);\
  \});\
\} else \{\
  routineDiv.innerHTML = "<p>\uc0\u50724 \u45720 \u51008  \u55092 \u49885 \u51068 \u51077 \u45768 \u45796 .</p>";\
\}\
\
// \uc0\u52404 \u53356  \u53364 \u47533  \u49884  \u46041 \u51089 \
function toggleDone(btn) \{\
  const item = btn.parentElement;\
  item.classList.toggle("done");\
  routineDiv.appendChild(item); // \uc0\u52404 \u53356  \u49884  \u47592  \u50500 \u47000 \u47196  \u51060 \u46041 \
\}\
}
