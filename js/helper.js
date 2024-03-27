
// ================================================================

const EAGLER_1_8_CLIENT = "https://api.astoris.pro/";
const EAGLER_1_5_CLIENT = "/mc/1.5.2/";
const EAGLER_B1_3_CLIENT = "/mc/b1.3/";
const EAGLER_INDEV_CLIENT = "/mc/indev/";
const EAGLER_A1_2_6_CLIENT = "/mc/a1.2.6/";

const COUNTER = "https://api.api-ninjas.com/v1/counter?id=eaglercraft.com&hit=true";

const EAGLER_1_8_OFFLINE = [ "https://api.astoris.pro/", "https://api.astoris.pro/" ];
const EAGLER_1_5_OFFLINE = [ "https://bafybeihqzktptevgim3shzanqnwcdnstac2ud6rqe5zrtudcuo3gnzhsui.ipfs.dweb.link/?filename=Offline_Download_Version.zip", "Offline_Download_Version.zip" ];
const EAGLER_B1_3_OFFLINE = [ "https://bafybeifggl6gatmtuwxeb46mq3qe3j5fgmoztkxpi5hgvqollnpxyfcr7q.ipfs.dweb.link/?filename=Eaglercraft_Beta_Offline_Download.zip", "Eaglercraft_Beta_Offline_Download.zip" ];
const EAGLER_INDEV_OFFLINE = [ "https://bafybeiaw4qf57qitpu2eza2pvs3qepeiq3ea3qnolgrepnnridnhfoqiui.ipfs.dweb.link/?filename=Indev.zip", "Indev.zip" ];
const EAGLER_A1_2_6_OFFLINE = [ "https://bafybeifa2byut7cmfcgaukg7xptg75i352nb3byx5vidim7o3wdduqv54y.ipfs.dweb.link/?filename=Alpha_Offline_Download.zip", "Alpha_Offline_Download.zip" ];

const COUNTER_1_8_OFFLINE = null;
const COUNTER_1_5_OFFLINE = null;
const COUNTER_B1_3_OFFLINE = null;


const EAGLER_1_8_PLUGIN = [ "https://deev.is/eagler/EaglerXBungee-1.0.10.jar", "EaglerXBungee-1.0.10.jar" ];
const EAGLER_1_5_PLUGIN = [ "https://deev.is/eagler/eaglerbungee-1.5.2.zip", "eaglerbungee-1.5.2.zip" ];
const EAGLER_B1_3_PLUGIN = [ "https://deev.is/eagler/eaglerbukkit-b1.3.zip", "eaglerbukkit-b1.3.zip" ];

const COUNTER_1_8_PLUGIN = null;
const COUNTER_1_5_PLUGIN = null;
const COUNTER_B1_3_PLUGIN = null;


const EAGLER_1_8_SOURCE = "https://git.eaglercraft.rip/eaglercraft/eaglercraft-1.8";
const EAGLER_1_5_SOURCE = "https://git.eaglercraft.rip/eaglercraft/eaglercraft-1.5";
const EAGLER_B1_3_SOURCE = "https://git.eaglercraft.rip/eaglercraft/eaglercraft-b1.3";
const EAGLER_INDEV_SOURCE = "https://git.eaglercraft.rip/3rdparty/peytonplayz585-indev";
const EAGLER_A1_2_6_SOURCE = "https://git.eaglercraft.rip/3rdparty/peytonplayz585-a1.2.6";

const COUNTER_1_8_SOURCE = null;
const COUNTER_1_5_SOURCE = null;
const COUNTER_B1_3_SOURCE = null;
const COUNTER_INDEV_SOURCE = null;

const IPFS_LOAD_TIME_WARNING = () => alert("Notice: Some links might take several minutes to load!\n\nPlease be patient you eagler");

// ================================================================


function playNow() {
    const version = $("#Version option:selected").val();
    if (version === 'r1.8') {
        if(typeof COUNTER === "string") $.ajax({method: 'GET', headers: { 'X-Api-Key': 'L+V7cvfWHQOvVDYfyYjkiA==9vs8Sk4DrXIOpNSZ'}, url: COUNTER, dataType: "script", success: ""});
        location.replace(EAGLER_1_8_CLIENT);
    }
    if (version === 'r1.5') {
        if(typeof COUNTER === "string") $.ajax({method: 'GET', headers: { 'X-Api-Key': 'L+V7cvfWHQOvVDYfyYjkiA==9vs8Sk4DrXIOpNSZ'}, url: COUNTER, dataType: "script", success: ""});
        location.replace(EAGLER_1_5_CLIENT);
    }
    if (version === 'b1.3') {
        if(typeof COUNTER === "string") $.ajax({method: 'GET', headers: { 'X-Api-Key': 'L+V7cvfWHQOvVDYfyYjkiA==9vs8Sk4DrXIOpNSZ'}, url: COUNTER, dataType: "script", success: ""});
        location.replace(EAGLER_B1_3_CLIENT);
    }
    if (version === 'indev') {
        location.replace(EAGLER_INDEV_CLIENT);
    }
    if (version === 'a1.2.6') {
        location.replace(EAGLER_A1_2_6_CLIENT);
    }
}

function downloadFileFromURL(urlIn, filenameOut) {
    const cunt = document.createElement("a");
    cunt.href = urlIn;
    cunt.download = filenameOut;
    cunt.click();
}

function downloadOfflineNow() {
    const version = $("#Version option:selected").val();
    if (version === 'r1.8') {
        IPFS_LOAD_TIME_WARNING();
        if(typeof COUNTER === "string") $.ajax({url: COUNTER, dataType: "script", success: ""});
       downloadFileFromURL(EAGLER_1_8_OFFLINE[0], EAGLER_1_8_OFFLINE[1]);
    }
    if (version === 'r1.5') {
        IPFS_LOAD_TIME_WARNING();
        if(typeof COUNTER === "string") $.ajax({url: COUNTER, dataType: "script", success: ""});
        downloadFileFromURL(EAGLER_1_5_OFFLINE[0], EAGLER_1_5_OFFLINE[1]);
    }
    if (version === 'b1.3') {
        IPFS_LOAD_TIME_WARNING();
        if(typeof COUNTER === "string") $.ajax({url: COUNTER, dataType: "script", success: ""});
        downloadFileFromURL(EAGLER_B1_3_OFFLINE[0], EAGLER_B1_3_OFFLINE[1]);
    }
    if (version === 'indev') {
        downloadFileFromURL(EAGLER_INDEV_OFFLINE[0], EAGLER_INDEV_OFFLINE[1]);
    }
    if (version === 'a1.2.6') {
        downloadFileFromURL(EAGLER_A1_2_6_OFFLINE[0], EAGLER_A1_2_6_OFFLINE[1]);
    }
}

function downloadPluginNow() {
    const version = $("#Version option:selected").val();
    if (version === 'r1.8') {
        downloadFileFromURL(EAGLER_1_8_PLUGIN[0], EAGLER_1_8_PLUGIN[1]);
    }
    if (version === 'r1.5') {
        downloadFileFromURL(EAGLER_1_5_PLUGIN[0], EAGLER_1_5_PLUGIN[1]);
    }
    if (version === 'b1.3') {
        downloadFileFromURL(EAGLER_B1_3_PLUGIN[0], EAGLER_B1_3_PLUGIN[1]);
    }
}

function downloadSourceNow() {
    const version = $("#Version option:selected").val();
    if (version === 'r1.8') {
        location.replace(EAGLER_1_8_SOURCE);
    }
    if (version === 'r1.5') {
        location.replace(EAGLER_1_5_SOURCE);
    }
    if (version === 'b1.3') {
        location.replace(EAGLER_B1_3_SOURCE);
    }
    if (version === 'indev') {
        location.replace(EAGLER_INDEV_SOURCE);
    }
    if (version === 'a1.2.6') {
        location.replace(EAGLER_A1_2_6_SOURCE);
    }
}

window.addEventListener("load", () => {
    $("#play-now").on("click", playNow);
    $("#download-offline").on("click", downloadOfflineNow);
    $("#download-plugin").on("click", downloadPluginNow);
    $("#download-source").on("click", downloadSourceNow);
});
