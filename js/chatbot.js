window.watsonAssistantChatOptions = {
    integrationID: "8b26b2b1-0823-4040-934d-a1dfa9e9118d",
    region: "au-syd",
    serviceInstanceID: "07c4eb08-36a9-4e24-8bb5-8675b9a719c5",
    onLoad: async (instance) => { await instance.render(); }
};

setTimeout (function() {
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});