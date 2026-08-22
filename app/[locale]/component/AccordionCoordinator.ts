type CloseHandler = () => void;

class AccordionCoordinator {
  private handlers: Set<CloseHandler> = new Set();

  register(handler: CloseHandler) {
    this.handlers.add(handler);
    return () => this.handlers.delete(handler);
  }

  closeOthers(currentHandler: CloseHandler) {
    this.handlers.forEach((handler) => {
      if (handler !== currentHandler) {
        handler();
      }
    });
  }
}

export const accordionCoordinator = new AccordionCoordinator();
