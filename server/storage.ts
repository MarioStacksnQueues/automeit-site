import { contactSubmissions, checklistRequests, type InsertContact, type ContactSubmission, type InsertChecklist, type ChecklistRequest } from "@shared/schema";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  createChecklistRequest(request: InsertChecklist): Promise<ChecklistRequest>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, ContactSubmission>;
  private checklists: Map<number, ChecklistRequest>;
  private currentContactId: number;
  private currentChecklistId: number;

  constructor() {
    this.contacts = new Map();
    this.checklists = new Map();
    this.currentContactId = 1;
    this.currentChecklistId = 1;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contact: ContactSubmission = { ...insertContact, id, createdAt: new Date() };
    this.contacts.set(id, contact);
    return contact;
  }

  async createChecklistRequest(insertChecklist: InsertChecklist): Promise<ChecklistRequest> {
    const id = this.currentChecklistId++;
    const request: ChecklistRequest = { ...insertChecklist, id, createdAt: new Date() };
    this.checklists.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
