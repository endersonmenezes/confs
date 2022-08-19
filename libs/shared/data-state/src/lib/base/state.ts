import { catchError, distinctUntilChanged, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

export abstract class State<T> {
  protected _error = new BehaviorSubject<string | null>(null);
  public error$ = this._error.asObservable();

  private _state: BehaviorSubject<T>;
  protected get state(): T {
    return this._state.getValue();
  }

  constructor(initialState: T) {
    this._state = new BehaviorSubject<T>(initialState);
  }

  protected select<K>(mapFn: (state: T) => K): Observable<K> {
    return this._state.asObservable().pipe(
      map((state: T) => mapFn(state)),
      catchError((err, caught) => {
        if (err) this.setsetError(err);
        return caught;
      }),
      distinctUntilChanged()
    );
  }

  protected setState(newState: Partial<T>) {
    this._state.next({
      ...this.state,
      ...newState,
    });
  }

  protected setsetError(error: string | null) {
    this._error.next(error);
  }
}