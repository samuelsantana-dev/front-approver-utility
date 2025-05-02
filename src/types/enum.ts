export enum Botoes {
    buttonUrl = 10,
    buttonResponse = 20,
}

export interface chatValues {
    modelName: string;
    modelCategory: string;
    messageContent: string;
    footerContent: string;
    buttonUrlOrResponse: number;
    header: {
      text: string;
      image: File | null;
      video: File | null;
      audio: File | null;
    };
  }

export interface HeaderValues {
    // onBackClick: () => void;
    contactAvatar: string;
    contactName: string;
}