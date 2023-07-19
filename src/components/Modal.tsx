import { ReactNode } from 'react';
import { Button } from './Button';

export const Modal: React.FC<{
  confirm: () => void;
  cancel: () => void;
  footer?: boolean;
  children: ReactNode;
}> = ({ confirm, cancel, children, footer = true }) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
          onClick={cancel}
        >
          <div
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
            onClick={e => e.stopPropagation()}
          >
            {children}
            {footer && (
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <Button
                  onClick={confirm}
                  size="sm"
                  label="Submit"
                  className="sm:ml-3 w-full sm:w-auto"
                />
                <Button onClick={cancel} outline size="sm" label="Cancel" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
