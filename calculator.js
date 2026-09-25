/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"dose-de-carboplatina","title":"Dose de carboplatina (Calvert)","fields":[["auc","AUC-alvo","num",{"min":1,"max":10,"step":0.5,"unit":"mg/mL·min","ph":"5"}],["idade","Idade","num",{"min":18,"max":100,"step":1,"unit":"anos","ph":"60"}],["peso","Peso","num",{"min":30,"max":250,"step":0.1,"unit":"kg","ph":"70"}],["cr","Creatinina sérica","num",{"min":0.2,"max":15,"step":0.01,"unit":"mg/dL","ph":"1,0"}],["sexo","Sexo","radio",{"opts":{"M":"Masculino","F":"Feminino"}}],["tfg","TFG medida (opcional; substitui o Cockcroft-Gault)","num",{"min":5,"max":250,"step":1,"unit":"mL/min","ph":"","opt":true}]],"config":null,"reviewStatus":"restricted","clinicalValidation":"not-performed"});
function calculate(){return {error:'Cálculo suspenso: consulte a revisão e a fonte oficial.',code:'REVIEW_REQUIRED',id:TOOL.id};}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
