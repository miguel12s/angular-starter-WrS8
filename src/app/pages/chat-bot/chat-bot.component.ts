import { AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';


interface Message{
  message:string
  state:string
}
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})


export class ChatBotComponent implements AfterViewChecked {
  @ViewChild('chatbox') private chatboxRef!: ElementRef;

  
  showModal=false
  messages:Message[]=[
    {
      message:"hola",
      state:"enviado"
    }
  ]
  message:string=""
  constructor() {
    
  }

  ngAfterViewChecked(): void {
    this.scrollMessage()
  }
  changeMode(){
    if(this.showModal){
      this.showModal=false
    }else{
      this.showModal=true
    }
  }

  sendMessage(){
    const newMessage:Message={message:this.message,state:"enviado"}
    this.messages.push(newMessage)
    // this.message=""
  }

  private scrollMessage(){
    const chatbox=this.chatboxRef.nativeElement
    chatbox.scrollTop=chatbox.scrollHeight
  }

 

  // ngAfterViewInit(): void {
  //   this.inputInitHeight = this.chatInput?.nativeElement.scrollHeight;
    
  //   // Agregar escuchadores de eventos aquí
  //   if (this.chatInput) {
  //     this.chatInput.nativeElement.addEventListener('input', () => {
  //       this.onInput();
  //     });

  //     this.chatInput.nativeElement.addEventListener('keydown', (e:any) => {
  //       this.onKeyDown(e);
  //     });
  //   }
    
  //   if (this.sendChatBtn) {
  //     this.sendChatBtn.nativeElement.addEventListener('click', () => {
  //       this.onSendChatClick();
  //     });
  //   }

  //   if (this.closeBtn) {
  //     this.closeBtn.nativeElement.addEventListener('click', () => {
  //       this.onCloseClick();
  //     });
  //   }

  //   if (this.chatbotToggler) {
  //     this.chatbotToggler.nativeElement.addEventListener('click', () => {
  //       this.onTogglerClick();
  //     });
  //   }
  // }

  // createChatLi(message: string, className: string): HTMLElement {
  //   const chatLi = document.createElement('li');
  //   chatLi.classList.add('chat', className);
  //   let chatContent = className === 'outgoing' ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  //   chatLi.innerHTML = chatContent;

  //   const pElement = chatLi.querySelector('p');
  //   if (pElement) {
  //     pElement.textContent = message;
  //   }

  //   return chatLi;
  // }

  // generateResponse(chatElement: HTMLElement): void {
  //   const API_URL = 'https://api.openai.com/v1/chat/completions';
  //   const messageElement = chatElement.querySelector('p');
    
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${this.API_KEY}`
  //     },
  //     body: JSON.stringify({
  //       model: 'gpt-3.5-turbo',
  //       messages: [{ role: 'user', content: this.userMessage }],
  //     })
  //   };
    
  //   fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
  //     if (messageElement) {
  //       messageElement.textContent = data.choices[0].message.content.trim();
  //     }
  //   }).catch(() => {
  //     if (messageElement) {
  //       messageElement.classList.add('error');
  //       messageElement.textContent = 'Oops! Something went wrong. Please try again.';
  //     }
  //   }).finally(() => {
  //     if (this.chatbox) {
  //       this.chatbox.nativeElement.scrollTo(0, this.chatbox.nativeElement.scrollHeight);
  //     }
  //   });
  // }

  // handleChat(): void {
  //   if (this.chatInput) {
  //     this.userMessage = this.chatInput.nativeElement.value.trim();
  //     if (!this.userMessage) return;
      
  //     this.chatInput.nativeElement.value = '';
  //     this.chatInput.nativeElement.style.height = `${this.inputInitHeight}px`;
      
  //     if (this.chatbox) {
  //       this.chatbox.nativeElement.appendChild(this.createChatLi(this.userMessage, 'outgoing'));
  //       this.chatbox.nativeElement.scrollTo(0, this.chatbox.nativeElement.scrollHeight);
        
  //       setTimeout(() => {
  //         const incomingChatLi = this.createChatLi('Thinking...', 'incoming');
  //         if (this.chatbox) {
  //           this.chatbox.nativeElement.appendChild(incomingChatLi);
  //           this.chatbox.nativeElement.scrollTo(0, this.chatbox.nativeElement.scrollHeight);
  //           this.generateResponse(incomingChatLi);
  //         }
  //       }, 600);
  //     }
  //   }
  // }

  // onInput(): void {
  //   if (this.chatInput) {
  //     this.chatInput.nativeElement.style.height = `${this.inputInitHeight}px`;
  //     this.chatInput.nativeElement.style.height = `${this.chatInput.nativeElement.scrollHeight}px`;
  //   }
  // }

  // onKeyDown(event: KeyboardEvent): void {
  //   if (this.chatInput) {
  //     if (event.key === 'Enter' && !event.shiftKey && window.innerWidth > 800) {
  //       event.preventDefault();
  //       this.handleChat();
  //     }
  //   }
  // }

  // onSendChatClick(): void {
  //   this.handleChat();
  // }

  // onCloseClick(): void {
  //   if (document.body) {
  //     document.body.classList.remove('show-chatbot');
  //   }
  // }

  // onTogglerClick(): void {
  //   if (document.body) {
  //     document.body.classList.toggle('show-chatbot');
  //   }
  // }
}