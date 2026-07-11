export interface TerminalLine {
  id: string;
  type: 'command' | 'output';
  text: string;
}