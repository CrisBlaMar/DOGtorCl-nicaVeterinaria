"use strict";(self.webpackChunkDogtor=self.webpackChunkDogtor||[]).push([[636],{6636:(H,Z,s)=>{s.r(Z),s.d(Z,{AreasociosModule:()=>B});var m=s(6019),c=s(2979),_=s(1659),d=s.n(_),o=s(3556),g=s(2935),p=s(9198),a=s(7537);function h(e,r){1&e&&(o.TgZ(0,"span",20),o._uU(1," Debe introducir un correo de usuario "),o.qZA())}function A(e,r){1&e&&(o.TgZ(0,"span",20),o._uU(1," Debe introducir una contrase\xf1a "),o.qZA())}let T=(()=>{class e{constructor(t,n){this.usuarioservice=t,this.router=n,this.usuario={nombre:"",contrasenia:"",apellidos:"",dni:"",telefono:"",email:""}}login(){this.usuarioservice.login(this.usuario.email,this.usuario.contrasenia).subscribe({next:t=>{localStorage.setItem("token",t.access_token),this.usuarioservice.getIdUsuario(),this.router.navigateByUrl("/areasocios/opciones")},error:t=>{d().fire("Error",t.error.mensaje,"error")}})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(g.i),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-login"]],decls:34,vars:4,consts:[["info","INICIO DE SESI\xd3N"],[1,"formulariologin","container-fluid","row"],[1,"col-lg-6","col-md-12","col-sm-12","col-xs-12"],["src","./assets/img/gatito.png","alt","imagen  de un gato con pelaje anaranjadado y blanco"],[1,"col-lg-6","col-md-12","col-sm-12","col-xs-12","mt-5","divformu"],["id","logintexto"],[1,"login",3,"ngSubmit"],[1,"form-group"],["for","email"],[1,"fa","fa-envelope"],["type","text","name","email","id","email","placeholder","   Email","required","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["class","form-text text-danger",4,"ngIf"],["for","contrasenia"],["aria-hidden","true",1,"fa","fa-lock"],["type","password","name","contrasenia","id","contrasenia","placeholder","   Contrase\xf1a","required","",1,"form-control",3,"ngModel","ngModelChange"],["contrasenia","ngModel"],[1,"btn"],[1,"button"],["routerLink","/quierosersocio"],[1,"form-text","text-danger"]],template:function(t,n){if(1&t&&(o._UZ(0,"app-ubicacion",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o._UZ(3,"img",3),o.qZA(),o.TgZ(4,"div",4),o.TgZ(5,"h1",5),o.TgZ(6,"strong"),o._uU(7,"Iniciar Sesi\xf3n"),o.qZA(),o.qZA(),o.TgZ(8,"p"),o._uU(9,"Accede con tus datos de registro"),o.qZA(),o.TgZ(10,"form",6),o.NdJ("ngSubmit",function(){return n.login()}),o.TgZ(11,"div",7),o.TgZ(12,"label",8),o._UZ(13,"i",9),o.qZA(),o.TgZ(14,"input",10,11),o.NdJ("ngModelChange",function(l){return n.usuario.email=l}),o.qZA(),o.YNc(16,h,2,0,"span",12),o.qZA(),o._UZ(17,"br"),o.TgZ(18,"div",7),o.TgZ(19,"label",13),o._UZ(20,"i",14),o.qZA(),o.TgZ(21,"input",15,16),o.NdJ("ngModelChange",function(l){return n.usuario.contrasenia=l}),o.qZA(),o.YNc(23,A,2,0,"span",12),o.qZA(),o._UZ(24,"br"),o.TgZ(25,"div",17),o.TgZ(26,"button",18),o._uU(27,"Acceder"),o.qZA(),o.qZA(),o.qZA(),o._UZ(28,"br"),o._UZ(29,"br"),o.TgZ(30,"p"),o._uU(31,"\xbfA\xfan no formas parte de nuestra manada?"),o.qZA(),o.TgZ(32,"a",19),o._uU(33," Reg\xedstrate aqu\xed"),o.qZA(),o.qZA(),o.qZA()),2&t){const i=o.MAs(15),l=o.MAs(22);o.xp6(14),o.Q6J("ngModel",n.usuario.email),o.xp6(2),o.Q6J("ngIf",i.errors&&i.touched),o.xp6(5),o.Q6J("ngModel",n.usuario.contrasenia),o.xp6(2),o.Q6J("ngIf",l.errors&&l.touched)}},directives:[p.D,a._Y,a.JL,a.F,a.Fj,a.Q7,a.JJ,a.On,m.O5,c.yS],styles:[".formulariologin[_ngcontent-%COMP%]{width:60%;height:30%;margin:10px auto 90px;padding-top:10px;padding-bottom:10px;text-align:center;border-radius:20px;color:#253013;background-color:#fae4cf;background-size:cover}label[_ngcontent-%COMP%]{color:#253013}input[_ngcontent-%COMP%]{border-top:none;border-right:none;border-left:none;background-color:#fae4cf;border-color:#253013}[_ngcontent-%COMP%]::placeholder{color:#253013}a[_ngcontent-%COMP%]{color:#253013;letter-spacing:3px;font-size:20px}img[_ngcontent-%COMP%]{width:100%}#logintexto[_ngcontent-%COMP%]{color:#253013}.button[_ngcontent-%COMP%]{min-width:150px;min-height:50px;font-size:20px;letter-spacing:4px;font-weight:600;color:#253013;background:#CC9973;border:none;border-radius:8px;cursor:pointer;font-family:cocogose}.button[_ngcontent-%COMP%]:hover{transform:scale(1.1);color:#fff;background-color:#253013}p[_ngcontent-%COMP%]{color:#253013}@media screen and (min-width: 300px) and (max-width: 698px){.formulariologin[_ngcontent-%COMP%]{width:100%}}"]}),e})(),C=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-misdatos"]],decls:21,vars:0,consts:[["info","O P C I O N E S"],[1,"enlaces","container-fluid","mt-5","mb-5"],[1,"row","text-center"],[1,"col-lg-4","col-md-12"],["routerLink","/areasocios/misdatos",1,"enlaces"],[1,"textoenlaces"],["src","./assets/img/misdatos1.jpeg","alt","imagen de un chico con su perro en brazos"],["routerLink","/areasocios/registromascota",1,"enlaces"],["src","./assets/img/addmascota.jpeg","alt","perro de raza carlino/pug sentado "],["routerLink","/areasocios/mimascota",1,"enlaces"],["src","./assets/img/mimascota1.jpeg","alt","imagen de una mano sosteniendo una patita de perro"]],template:function(t,n){1&t&&(o._UZ(0,"app-ubicacion",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"a",4),o.TgZ(5,"strong"),o.TgZ(6,"p",5),o._uU(7,"ACCEDER A MIS DATOS"),o.qZA(),o.qZA(),o._UZ(8,"img",6),o.qZA(),o.qZA(),o.TgZ(9,"div",3),o.TgZ(10,"a",7),o.TgZ(11,"strong"),o.TgZ(12,"p",5),o._uU(13,"REGISTRAR NUEVA MASCOTA"),o.qZA(),o.qZA(),o._UZ(14,"img",8),o.qZA(),o.qZA(),o.TgZ(15,"div",3),o.TgZ(16,"a",9),o.TgZ(17,"strong"),o.TgZ(18,"p",5),o._uU(19,"ACCEDER A MIS MASCOTAS"),o.qZA(),o.qZA(),o._UZ(20,"img",10),o.qZA(),o.qZA(),o.qZA(),o.qZA())},directives:[p.D,c.yS],styles:["img[_ngcontent-%COMP%]{width:79%}img[_ngcontent-%COMP%]:hover{color:#5e5e34;transform:scale(1.05)}.enlaces[_ngcontent-%COMP%]{margin:auto;text-decoration:none}.enlaces[_ngcontent-%COMP%]:visited{color:#000}p[_ngcontent-%COMP%]{font-family:cocogose;font-size:20px;background-color:#e9bb97b6;border-radius:20px}.footer[_ngcontent-%COMP%]{position:relative!important}"]}),e})();var u=s(516);function x(e,r){1&e&&(o.TgZ(0,"span",21),o._uU(1,"Debes introducir un nombre v\xe1lido"),o.qZA())}function q(e,r){1&e&&(o.TgZ(0,"span",21),o._uU(1,"Debes introducir una especie v\xe1lida"),o.qZA())}function v(e,r){1&e&&(o.TgZ(0,"span",21),o._uU(1,"Debes introducir un pelaje v\xe1lido"),o.qZA())}function M(e,r){1&e&&(o.TgZ(0,"span",21),o._uU(1,"Debes introducir una raza v\xe1lida"),o.qZA())}function O(e,r){1&e&&(o.TgZ(0,"span",21),o._uU(1,"Debes marcar una de las opciones"),o.qZA())}let U=(()=>{class e{constructor(t,n,i){this.form=t,this.usuarioservice=n,this.router=i,this.miMascota=this.form.group({especie:["",[a.kI.required,a.kI.pattern("^[A-Za-z ]+$")]],nombre:["",[a.kI.required,a.kI.pattern("^[A-Za-z ]+$")]],pelaje:["",[a.kI.required,a.kI.pattern("^[A-Za-z ]+$")]],raza:["",[a.kI.required,a.kI.pattern("^[A-Za-z ]+$")]],sexo:["",[a.kI.required,a.kI.pattern("^[A-Za-z ]+$")]]})}ngOnInit(){}hacerRegistro(){this.usuarioservice.registroMascota(this.miMascota.value).subscribe({next:n=>{this.miMascota.reset(),d().fire({title:"Tu mascota ha sido registrada :)",icon:"success",showDenyButton:!0,confirmButtonColor:"#E9BB97",denyButtonColor:"#999966",confirmButtonText:"Volver a Opciones",denyButtonText:"Registrar otra mascota"}).then(i=>{i.isConfirmed?this.router.navigateByUrl("/areasocios/opciones"):i.isDenied&&this.router.navigateByUrl("/areasocios/registromascota")})},error:n=>{d().fire("Error",n.error.mensaje,"error")}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(a.qu),o.Y36(g.i),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-registromascota"]],decls:45,vars:7,consts:[["info","REGISTRAR MASCOTA"],[1,"formulariologin","container","row","mb-5","mt-3"],[1,"col-6","mt-2"],["id","logintexto"],["src","./assets/img/perropng129.png","alt","imagen de un perro de raza corgi gal\xe9s sentado"],[1,"col-6","mt-2","mb-2"],[1,"login","row",3,"formGroup","ngSubmit"],[1,"col-lg-12"],["type","text","formControlName","nombre","placeholder","Nombre...","required","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","text","formControlName","especie","placeholder","Especie...","required","",1,"form-control"],["type","text","formControlName","pelaje","placeholder","Pelaje...","required","",1,"form-control"],["type","text","formControlName","raza","placeholder","Raza...","required","",1,"form-control"],["for","sexo",1,"inputSexo"],["for","valor1"],["type","radio","value","hembra","formControlName","sexo","id","valor1","checked","",1,"mt-3"],["for","valor2"],["type","radio","value","macho","formControlName","sexo","id","valor2",1,"mt-3"],["for","valor3"],["type","radio","value","otro","formControlName","sexo","id","valor3",1,"mt-3"],["type","submit",1,"mt-5","btn","text-white","text-center",3,"disabled"],[1,"form-text","text-danger"]],template:function(t,n){1&t&&(o._UZ(0,"app-ubicacion",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"h1",3),o.TgZ(4,"strong"),o._uU(5,"Registra a tu mascota"),o.qZA(),o.qZA(),o.TgZ(6,"p"),o._uU(7,"\xbfQuieres que tu mejor amigo forme parte de nuestra manada?"),o.qZA(),o.TgZ(8,"p"),o._uU(9," \xa1Reg\xedstralo aqu\xed!"),o.qZA(),o._UZ(10,"img",4),o.qZA(),o.TgZ(11,"div",5),o.TgZ(12,"form",6),o.NdJ("ngSubmit",function(){return n.hacerRegistro()}),o.TgZ(13,"div",7),o._UZ(14,"input",8),o._UZ(15,"br"),o.YNc(16,x,2,0,"span",9),o._UZ(17,"input",10),o._UZ(18,"br"),o.YNc(19,q,2,0,"span",9),o._UZ(20,"input",11),o._UZ(21,"br"),o.YNc(22,v,2,0,"span",9),o._UZ(23,"input",12),o._UZ(24,"br"),o.YNc(25,M,2,0,"span",9),o._UZ(26,"br"),o.TgZ(27,"label",13),o._uU(28,"Sexo:"),o.qZA(),o._UZ(29,"br"),o.TgZ(30,"label",14),o._uU(31,"Hembra"),o.qZA(),o._UZ(32,"input",15),o._UZ(33,"br"),o.TgZ(34,"label",16),o._uU(35,"Macho"),o.qZA(),o._UZ(36,"input",17),o._UZ(37,"br"),o.TgZ(38,"label",18),o._uU(39,"Otro"),o.qZA(),o._UZ(40,"input",19),o._UZ(41,"br"),o.YNc(42,O,2,0,"span",9),o.TgZ(43,"button",20),o._uU(44," REGISTRAR MI MASCOTA "),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(12),o.Q6J("formGroup",n.miMascota),o.xp6(4),o.Q6J("ngIf",n.miMascota.controls.nombre.errors&&n.miMascota.controls.nombre.touched),o.xp6(3),o.Q6J("ngIf",n.miMascota.controls.especie.errors&&n.miMascota.controls.especie.touched),o.xp6(3),o.Q6J("ngIf",n.miMascota.controls.pelaje.errors&&n.miMascota.controls.pelaje.touched),o.xp6(3),o.Q6J("ngIf",n.miMascota.controls.raza.errors&&n.miMascota.controls.raza.touched),o.xp6(17),o.Q6J("ngIf",n.miMascota.controls.sexo.errors&&n.miMascota.controls.sexo.touched),o.xp6(1),o.Q6J("disabled",n.miMascota.invalid))},directives:[p.D,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.Q7,m.O5,a._],styles:[".formulariologin[_ngcontent-%COMP%]{width:60%;margin:auto;text-align:center;border-radius:20px;color:#fff;background-size:cover;background-color:#fae4cf}img[_ngcontent-%COMP%]{width:50%}input[_ngcontent-%COMP%]{border-top:none;border-right:none;border-left:none;background-color:#fae4cf;border-color:#5e5e34}[_ngcontent-%COMP%]::placeholder{color:#5e5e34}.inputSexo[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{color:#5e5e34}button[_ngcontent-%COMP%]{min-width:40px;min-height:20px;font-size:15px;letter-spacing:4px;font-weight:600;color:#fff;background-color:#cc9973;border:none;border-radius:8px;cursor:pointer;font-family:cocogose}button[_ngcontent-%COMP%]:hover{transform:scale(1.1);background-color:#44522b}#logintexto[_ngcontent-%COMP%]{color:#5e5e34}p[_ngcontent-%COMP%]{color:#5e5e34}@media screen and (min-width: 700px) and (max-width: 1200px){.formulariologin[_ngcontent-%COMP%]{width:100%}}@media screen and (min-width: 300px) and (max-width: 698px){.formulariologin[_ngcontent-%COMP%]{width:100%}}"]}),e})();function y(e,r){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"div",6),o.TgZ(2,"p",7),o._uU(3,"Ups! Parece que de momento no tienes ninguna mascota registrada"),o.qZA(),o.TgZ(4,"h3",8),o._uU(5,"\xbfQuieres registrar a tu peque\xf1o amigo?"),o.qZA(),o.TgZ(6,"div",4),o.TgZ(7,"button",9),o._uU(8,"REGISTRAR NUEVA MASCOTA"),o.qZA(),o.qZA(),o.qZA(),o.qZA())}function I(e,r){if(1&e&&(o.TgZ(0,"div",10),o._UZ(1,"img",11),o.TgZ(2,"div",12),o.TgZ(3,"p",13),o._uU(4),o.qZA(),o.TgZ(5,"p",14),o._uU(6),o.qZA(),o.TgZ(7,"p",14),o._uU(8),o.qZA(),o.TgZ(9,"p",14),o._uU(10),o.qZA(),o.TgZ(11,"p",14),o._uU(12),o.qZA(),o.qZA(),o.qZA()),2&e){const t=r.$implicit;o.xp6(4),o.Oqu(t.nombre),o.xp6(2),o.Oqu(t.raza),o.xp6(2),o.Oqu(t.pelaje),o.xp6(2),o.Oqu(t.especie),o.xp6(2),o.Oqu(t.sexo)}}let P=(()=>{class e{constructor(t,n){this.usuarioservice=t,this.router=n,this.mascota=[]}mostrarMascotas(){this.usuarioservice.obtenerMascotasUsuario().subscribe({next:t=>{this.mascota=t},error:t=>{d().fire("Error",t.error.mensaje,"error")}})}ngOnInit(){this.mostrarMascotas()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(g.i),o.Y36(c.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-mimascota"]],decls:7,vars:2,consts:[[4,"ngIf"],[1,"container","row"],["class","card text-center col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-2 m-2",4,"ngFor","ngForOf"],["info","MI MASCOTA"],[1,"boton"],["type","button","routerLink","/areasocios/opciones",1,"btn","mt-4","mb-4"],[1,"nohaymascota","mt-5","mb-5"],[1,"text-center","texto"],[1,"text-center"],["type","button","routerLink","/areasocios/registromascota",1,"btn","mt-4","mb-4"],[1,"card","text-center","col-lg-3","col-md-6","col-sm-12","col-xs-12","mt-2","m-2"],["src","./assets/img/mimascotapng.png","alt","imagen png de una ilustraci\xf3n de un gato y un perro",1,"card-img-top"],[1,"card-body"],[1,"card-title"],[1,"card-text"]],template:function(t,n){1&t&&(o.YNc(0,y,9,0,"div",0),o.TgZ(1,"div",1),o.YNc(2,I,13,5,"div",2),o.qZA(),o._UZ(3,"app-ubicacion",3),o.TgZ(4,"div",4),o.TgZ(5,"button",5),o._uU(6,"Regresar a Opciones"),o.qZA(),o.qZA()),2&t&&(o.Q6J("ngIf",0==n.mascota.length),o.xp6(2),o.Q6J("ngForOf",n.mascota))},directives:[m.O5,m.sg,p.D,c.rH],styles:[".container[_ngcontent-%COMP%]{margin:auto;width:100%}.card-title[_ngcontent-%COMP%]{background-color:#d4d6a3}.btn[_ngcontent-%COMP%]{font-size:15px;letter-spacing:4px;font-weight:600;color:#fff;background:#CC9973;border:none;border-radius:8px;cursor:pointer;font-family:cocogose}.boton[_ngcontent-%COMP%]{margin:auto;text-align:center}button[_ngcontent-%COMP%]:hover{transform:scale(1.1);background-color:#44522b}.nohaymascota[_ngcontent-%COMP%]{background-color:#e9bb97;width:60%;margin:auto;border-radius:30px}.texto[_ngcontent-%COMP%]{font-size:28px;font-family:cocogose}.card[_ngcontent-%COMP%]{border-radius:30px;background-color:#e9bb97}p[_ngcontent-%COMP%]{font-size:16px}@media screen and (min-width: 300px) and (max-width: 698px){.nohaymascota[_ngcontent-%COMP%]{width:100%}}"]}),e})(),k=(()=>{class e{constructor(){this.emitter=new o.vpe,this.email=JSON.parse(localStorage.getItem("email")||"{}")}masInfo(){this.emitter.emit("\xa1Hola, "+this.email+"! Aqu\xed puedes modificar tus datos")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-hijo"]],outputs:{emitter:"emitter"},decls:2,vars:0,consts:[["type","button","data-bs-toggle","modal","data-bs-target","#exampleModal","id","myModal",1,"btn","btn-primary",3,"click"]],template:function(t,n){1&t&&(o.TgZ(0,"button",0),o.NdJ("click",function(){return n.masInfo()}),o._uU(1,"EDITAR MIS DATOS\n"),o.qZA())},styles:["button[_ngcontent-%COMP%]{color:#fff;background-color:#e9bb97;border-color:#e9bb97}button[_ngcontent-%COMP%]:hover{transform:scale(1.1);background-color:#44522b}"]}),e})();var f=s(4522),D=s(8260);let w=(()=>{class e{constructor(t){this.httpclient=t,this.baseUrl=D.N.baseUrl}editarmisDatos(t){const n=`${this.baseUrl}/user`,i=t;let l=localStorage.getItem("token");const $=(new f.WM).set("Authorization",`Bearer ${l}`);return this.httpclient.put(n,i,{headers:$})}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(f.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function E(e,r){1&e&&(o.TgZ(0,"span",15),o._uU(1,"El nombre no es correcto."),o.qZA())}function S(e,r){1&e&&(o.TgZ(0,"span",15),o._uU(1,"Debe introducir dos apellidos"),o.qZA())}function F(e,r){1&e&&(o.TgZ(0,"span",15),o._uU(1,"El DNI no es v\xe1lido, debe tener el siguiente formato: 12345678A"),o.qZA())}function N(e,r){1&e&&(o.TgZ(0,"span",15),o._uU(1,"Debe introducir un n\xfamero de tel\xe9fono v\xe1lido: 699999999"),o.qZA())}let b=(()=>{class e{constructor(t,n,i){this.editardatosservice=t,this.form=n,this.usuarioservice=i,this.carga=!1,this.miFormulario=this.form.group({nombre:["",[a.kI.required,a.kI.pattern("^[A-Za-z ]+$")]],apellidos:["",[a.kI.required,a.kI.pattern("([a-zA-Z]+) ([a-zA-Z]+)")]],telefono:["",[a.kI.required,a.kI.pattern("^[0-9,$]*$")]],dni:["",[a.kI.required,a.kI.pattern("[0-9]{8}[A-Za-z]{1}")]]}),this.nombre="",this.apellidos="",this.email="",this.telefono="",this.dni=""}editarMisDatos(){this.editardatosservice.editarmisDatos(this.miFormulario.value).subscribe({next:n=>{this.miFormulario.reset(),location.reload()},error:n=>{d().fire("Error",n.error.mensaje,"error")}})}mostrarDatos(){this.usuarioservice.obtenerDatosUsuario().subscribe({next:t=>{this.email=t.email,this.apellidos=t.apellidos,this.nombre=t.nombre,this.telefono=t.telefono,this.dni=t.dni,this.carga=!0},error:t=>{d().fire("Error",t.error.mensaje,"error")}})}ngOnInit(){this.mostrarDatos()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(w),o.Y36(a.qu),o.Y36(g.i))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-editar-datos"]],decls:26,vars:10,consts:[[1,"formulariologin","mt-2","mb-2"],[1,"mt-2"],[3,"formGroup","ngSubmit"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"form-floating","mt-2"],["id","nombre","formControlName","nombre","type","text",1,"form-control",3,"value"],["class","form-text text-danger",4,"ngIf"],["for","nombre",1,"text-dark"],["id","apellidos","formControlName","apellidos","type","text",1,"form-control",3,"value"],["for","apellidos",1,"text-dark"],["id","dni","formControlName","dni","type","text",1,"form-control",3,"value"],["for","dni",1,"text-dark"],["id","telefono","formControlName","telefono","type","text",1,"form-control",3,"value"],["for","telefono",1,"text-dark"],["type","submit","routerLink","/areasocios/misdatos",1,"mt-3","mb-2","btn","text-white","text-center",3,"disabled"],[1,"form-text","text-danger"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"form",2),o.NdJ("ngSubmit",function(){return n.editarMisDatos()}),o.TgZ(3,"div",3),o.TgZ(4,"div",4),o._UZ(5,"input",5),o.YNc(6,E,2,0,"span",6),o.TgZ(7,"label",7),o._uU(8,"Nombre"),o.qZA(),o.qZA(),o.TgZ(9,"div",4),o._UZ(10,"input",8),o.YNc(11,S,2,0,"span",6),o.TgZ(12,"label",9),o._uU(13,"Apellidos"),o.qZA(),o.qZA(),o.TgZ(14,"div",4),o._UZ(15,"input",10),o.YNc(16,F,2,0,"span",6),o.TgZ(17,"label",11),o._uU(18,"DNI"),o.qZA(),o.qZA(),o.TgZ(19,"div",4),o._UZ(20,"input",12),o.YNc(21,N,2,0,"span",6),o.TgZ(22,"label",13),o._uU(23,"Tel\xe9fono"),o.qZA(),o.qZA(),o.TgZ(24,"button",14),o._uU(25,"MODIFICAR DATOS"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(2),o.Q6J("formGroup",n.miFormulario),o.xp6(3),o.s9C("value",n.nombre),o.xp6(1),o.Q6J("ngIf",n.miFormulario.controls.nombre.errors&&n.miFormulario.controls.nombre.touched),o.xp6(4),o.s9C("value",n.apellidos),o.xp6(1),o.Q6J("ngIf",n.miFormulario.controls.apellidos.errors&&n.miFormulario.controls.apellidos.touched),o.xp6(4),o.s9C("value",n.dni),o.xp6(1),o.Q6J("ngIf",n.miFormulario.controls.dni.errors&&n.miFormulario.controls.dni.touched),o.xp6(4),o.s9C("value",n.telefono),o.xp6(1),o.Q6J("ngIf",n.miFormulario.controls.telefono.errors&&n.miFormulario.controls.telefono.touched),o.xp6(3),o.Q6J("disabled",n.miFormulario.invalid))},directives:[a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,m.O5,c.rH],styles:[".formulariologin[_ngcontent-%COMP%]{width:100%;margin:auto;text-align:center;border-radius:20px;color:#44581d;background-size:cover;background-color:#fae4cf}input[_ngcontent-%COMP%]{border-top:none;border-right:none;border-left:none;background-color:#fae4cf;border-color:#5e5e34}#logintexto[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:#5e5e34}button[_ngcontent-%COMP%]{background-color:#c98c47;border-color:#c98c47}button[_ngcontent-%COMP%]:hover{background-color:#925c1f;border-color:#925c1f}span[_ngcontent-%COMP%]{font-size:13px}@media screen and (min-width: 300px) and (max-width: 698px){.formulariologin[_ngcontent-%COMP%]{width:100%;margin:auto;text-align:center;border-radius:20px;color:#44581d;background-color:#fae4cf}}"]}),e})();function R(e,r){1&e&&(o.TgZ(0,"div"),o.TgZ(1,"div",6),o.TgZ(2,"p",7),o._uU(3,"Ups! Parece que de momento no tienes ninguna cita"),o.qZA(),o.TgZ(4,"h3",7),o._uU(5,"\xbfQuieres a\xf1adir una nueva cita?"),o.qZA(),o.TgZ(6,"div",4),o.TgZ(7,"button",8),o._uU(8,"REGISTRAR NUEVA CITA"),o.qZA(),o.qZA(),o.qZA(),o.qZA())}function J(e,r){if(1&e&&(o.TgZ(0,"div",9),o.TgZ(1,"div",10),o._UZ(2,"img",11),o.TgZ(3,"h5"),o._uU(4),o.qZA(),o.TgZ(5,"table",12),o.TgZ(6,"thead"),o.TgZ(7,"tr"),o.TgZ(8,"th",13),o._uU(9,"Fecha y hora"),o.qZA(),o.TgZ(10,"th",13),o._uU(11,"Mascota"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(12,"tbody"),o.TgZ(13,"tr"),o.TgZ(14,"td"),o._uU(15),o.qZA(),o.TgZ(16,"td"),o._uU(17),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&e){const t=r.$implicit,n=r.index;o.xp6(4),o.hij("Cita n\xba",n+1,""),o.xp6(11),o.Oqu(t.fecha),o.xp6(2),o.Oqu(t.mascota.nombre)}}const Y=[{path:"",component:T},{path:"opciones",component:C,canActivate:[u.x]},{path:"registromascota",component:U,canActivate:[u.x]},{path:"mimascota",component:P,canActivate:[u.x]},{path:"misdatos",component:(()=>{class e{constructor(t){this.usuarioservice=t,this.mensajehijo="",this.nombre="",this.apellidos="",this.email="",this.telefono="",this.dni=""}eventohijo(t){this.mensajehijo=t}mostrarDatos(){this.usuarioservice.obtenerDatosUsuario().subscribe({next:t=>{this.email=t.email,this.apellidos=t.apellidos,this.nombre=t.nombre,this.telefono=t.telefono,this.dni=t.dni},error:t=>{d().fire("Error",t.error.mensaje,"error")}})}ngOnInit(){this.mostrarDatos()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(g.i))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-misdatos"]],decls:46,vars:6,consts:[["info","MIS  DATOS"],[1,"texto","text-center"],[1,"container-fluid","text-center","row","mb-5"],[1,"foto"],["src","./assets/img/misdatosfoto.png","alt","imagen de una chica con su perro en brazos"],[1,"datos"],[1,"table-responsive","mt-3"],[1,"table","table-borderless"],[1,"p","radio1"],[1,"p"],[1,"p","radio2"],[1,"text-center","mb-5"],[3,"emitter"],["id","exampleModal","tabindex","-1","aria-labelledby","exampleModalLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"text-center"],[1,"modal-body"]],template:function(t,n){1&t&&(o._UZ(0,"app-ubicacion",0),o.TgZ(1,"div",1),o.TgZ(2,"h1"),o.TgZ(3,"strong"),o._uU(4,"Mis Datos"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(5,"div",2),o.TgZ(6,"div",3),o._UZ(7,"img",4),o.qZA(),o.TgZ(8,"div",5),o.TgZ(9,"div",6),o.TgZ(10,"table",7),o.TgZ(11,"tr"),o.TgZ(12,"td"),o._uU(13,"Nombre"),o.qZA(),o.TgZ(14,"td",8),o._uU(15),o.qZA(),o.qZA(),o.TgZ(16,"tr"),o.TgZ(17,"td"),o._uU(18,"Apellidos"),o.qZA(),o.TgZ(19,"td",9),o._uU(20),o.qZA(),o.qZA(),o.TgZ(21,"tr"),o.TgZ(22,"td"),o._uU(23,"Tel\xe9fono"),o.qZA(),o.TgZ(24,"td",9),o._uU(25),o.qZA(),o.qZA(),o.TgZ(26,"tr"),o.TgZ(27,"td"),o._uU(28,"DNI"),o.qZA(),o.TgZ(29,"td",9),o._uU(30),o.qZA(),o.qZA(),o.TgZ(31,"tr"),o.TgZ(32,"td"),o._uU(33,"E-mail"),o.qZA(),o.TgZ(34,"td",10),o._uU(35),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.TgZ(36,"div",11),o.TgZ(37,"app-hijo",12),o.NdJ("emitter",function(l){return n.eventohijo(l)}),o.qZA(),o.qZA(),o.TgZ(38,"div",13),o.TgZ(39,"div",14),o.TgZ(40,"div",15),o.TgZ(41,"div",16),o.TgZ(42,"h4",17),o._uU(43),o.qZA(),o.qZA(),o.TgZ(44,"div",18),o._UZ(45,"app-editar-datos"),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(15),o.Oqu(n.nombre),o.xp6(5),o.Oqu(n.apellidos),o.xp6(5),o.Oqu(n.telefono),o.xp6(5),o.Oqu(n.dni),o.xp6(5),o.Oqu(n.email),o.xp6(8),o.Oqu(n.mensajehijo))},directives:[p.D,k,b],styles:['.datos[_ngcontent-%COMP%]{background-color:#fae4cf;border-radius:30px;width:50%;margin:auto}.texto[_ngcontent-%COMP%]{background-color:#fae4cf}h1[_ngcontent-%COMP%]{color:#fae4cf;background-color:#858558}td[_ngcontent-%COMP%]{font-family:lemonmilk;letter-spacing:3px}.p[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;background-color:#858558;color:#fff}.radio1[_ngcontent-%COMP%]{border-top-left-radius:20px;border-top-right-radius:20px}.radio2[_ngcontent-%COMP%]{border-bottom-left-radius:20px;border-bottom-right-radius:20px}.modal[_ngcontent-%COMP%]{background-color:#fae4cf5d}.modal-content[_ngcontent-%COMP%]{background-color:#fae4cf}@media screen and (min-width: 300px) and (max-width: 698px){img[_ngcontent-%COMP%]{width:100%}.datos[_ngcontent-%COMP%]{width:100%}.modal-dialog[_ngcontent-%COMP%]{width:100%}}']}),e})(),canActivate:[u.x]},{path:"editardatos",component:b,canActivate:[u.x]},{path:"miscitas",component:(()=>{class e{constructor(t){this.usuarioservice=t,this.citas=[]}mostrarCitas(){this.usuarioservice.obtenerCitasUsuario().subscribe({next:t=>{this.citas=t},error:t=>{d().fire("Error",t.error.mensaje,"error")}})}ngOnInit(){this.mostrarCitas()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(g.i))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-mis-citas"]],decls:7,vars:2,consts:[[4,"ngIf"],[1,"container","row"],["class","card text-center col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-2 m-2",4,"ngFor","ngForOf"],["info","MIS CITAS"],[1,"boton"],["type","button","routerLink","/areasocios/opciones",1,"btn","mt-4","mb-4"],[1,"nohaycita","mt-5","mb-5"],[1,"text-center"],["type","button","routerLink","/areasocios/miscitas",1,"btn","mt-4","mb-4"],[1,"card","text-center","col-lg-3","col-md-6","col-sm-12","col-xs-12","mt-2","m-2"],[1,"card-body"],["src","./assets/img/cita.png","alt","icono grande de un calendario"],[1,"table"],["scope","col"]],template:function(t,n){1&t&&(o.YNc(0,R,9,0,"div",0),o.TgZ(1,"div",1),o.YNc(2,J,18,3,"div",2),o.qZA(),o._UZ(3,"app-ubicacion",3),o.TgZ(4,"div",4),o.TgZ(5,"button",5),o._uU(6,"Regresar a Opciones"),o.qZA(),o.qZA()),2&t&&(o.Q6J("ngIf",0==n.citas.length),o.xp6(2),o.Q6J("ngForOf",n.citas))},directives:[m.O5,m.sg,p.D,c.rH],styles:[".container[_ngcontent-%COMP%]{margin:auto;width:100%}h5[_ngcontent-%COMP%]{background-color:#d4d6a3}.btn[_ngcontent-%COMP%]{font-size:15px;letter-spacing:4px;font-weight:600;color:#fff;background:#CC9973;border:none;border-radius:8px;cursor:pointer;font-family:cocogose}.boton[_ngcontent-%COMP%]{margin:auto;text-align:center}button[_ngcontent-%COMP%]:hover{transform:scale(1.1);background-color:#44522b}.nohaycita[_ngcontent-%COMP%]{background-color:#e9bb97;width:60%;margin:auto;border-radius:30px}p[_ngcontent-%COMP%]{font-size:28px;font-family:cocogose}.card[_ngcontent-%COMP%]{border-radius:30px;background-color:#e9bb97}@media screen and (min-width: 300px) and (max-width: 698px){.nohaycita[_ngcontent-%COMP%]{width:100%}}"]}),e})(),canActivate:[u.x]}];let Q=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[[c.Bz.forChild(Y)],c.Bz]}),e})();var L=s(513);let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[u.x],imports:[[m.ez,Q,a.UX,a.u5,c.Bz,a.UX,L.$]]}),e})()}}]);